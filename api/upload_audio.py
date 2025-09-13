import os
from pymongo import MongoClient
import gridfs
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
client = MongoClient(MONGO_URI)
db = client["audio_db"]
fs = gridfs.GridFS(db)

SAMPLES_DIR = "samples"

def upload_audio_files():
    if not os.path.exists(SAMPLES_DIR):
        print(f"Error: '{SAMPLES_DIR}' directory not found.")
        return

    for filename in os.listdir(SAMPLES_DIR):
        if filename.endswith(".mp3"):
            filepath = os.path.join(SAMPLES_DIR, filename)
            with open(filepath, "rb") as f:
                file_id = fs.put(f, filename=filename)
                print(f"Uploaded {filename} with ID: {file_id}")

if __name__ == "__main__":
    upload_audio_files()
