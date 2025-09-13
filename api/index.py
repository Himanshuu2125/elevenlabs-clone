from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from pymongo import MongoClient
import gridfs
import io
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

# Load environment variables (for local development, Vercel handles this in production)
load_dotenv()

# Initialize MongoDB client globally for potential warm starts
# Vercel will keep the connection alive across invocations if the instance is warm
MONGO_URI = os.getenv("MONGO_URI") # Ensure this is set in Vercel environment variables
client = MongoClient(MONGO_URI)
db = client["audio_db"]
fs = gridfs.GridFS(db)

app = FastAPI()

# CORS configuration (adjust origins for your deployed frontend)
origins = [
    "http://localhost:3000",
    # Add your Vercel frontend URL here, e.g., "https://your-app-name.vercel.app"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/get-audio/{language}")
async def get_audio(language: str):
    """
    Fetch audio file for given language from MongoDB GridFS
    and return it as a streaming response.
    """
    try:
        # Find the file (assume filename = language.mp3 in DB)
        file = fs.find_one({"filename": f"{language.lower()}.mp3"})
        
        if not file:
            raise HTTPException(status_code=404, detail="Audio not found")

        # Read file into memory
        audio_data = file.read()
        return StreamingResponse(io.BytesIO(audio_data), media_type="audio/mpeg")

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Add a simple root endpoint for Vercel to detect the app
@app.get("/")
async def root():
    return {"message": "FastAPI serverless function is running!"}
