# Audio Streaming Application

This project is a full-stack application designed for streaming audio, featuring a Next.js frontend and a Python FastAPI backend. Audio files are stored and served from a MongoDB database using GridFS.

## Features

*   **Frontend:**
    *   User interface built with Next.js and React.
    *   Dropdown for language selection (e.g., English, Hindi, French, Spanish).
    *   Play/Pause functionality for selected audio.
    *   Loading indicator during audio fetching.
*   **Backend:**
    *   FastAPI server for handling audio requests.
    *   Streams audio files from MongoDB GridFS.
    *   CORS enabled for frontend communication.
*   **Data Storage:**
    *   MongoDB with GridFS for efficient storage and retrieval of large audio files.
*   **Development Tools:**
    *   Turbopack for fast Next.js development.

## Technologies Used

*   **Frontend:** Next.js, React, TypeScript, Tailwind CSS
*   **Backend:** Python, FastAPI, Uvicorn
*   **Database:** MongoDB, PyMongo, GridFS
*   **Package Managers:** npm (for client), pip (for API)

## Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed:

*   Node.js (LTS version recommended)
*   Python 3.8+
*   MongoDB (running locally or accessible via a connection string)

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Project29
```

### 2. Backend (API) Setup

Navigate to the `api` directory:

```bash
cd api
```

Create a `.env` file in the `api` directory and add your MongoDB connection URI:

```
MONGO_URI="mongodb://localhost:27017/audio_db"
```
Replace `"mongodb://localhost:27017/audio_db"` with your actual MongoDB connection string if it's hosted elsewhere.

Install Python dependencies:

```bash
pip install -r requirements.txt
```

**Upload Audio Files (Optional, for initial setup):**

If you have audio files (e.g., `english.mp3`, `hindi.mp3`) in a `samples` directory at the project root (`Project29/samples`), you can upload them to MongoDB using the provided script:

```bash
python upload_audio.py
```
*Note: Ensure your `samples` directory exists at the project root (`Project29/samples`) and contains `.mp3` files named according to the languages you want to support (e.g., `english.mp3`, `hindi.mp3`).*

Run the FastAPI server:

```bash
uvicorn index:app --reload
```
The API will be running at `http://localhost:8000`.

### 3. Frontend (Client) Setup

Open a new terminal and navigate to the `client` directory:

```bash
cd client
```

Install Node.js dependencies:

```bash
npm install
```

Run the Next.js development server:

```bash
npm run dev
```
The frontend application will be accessible at `http://localhost:3000`.

## Deployment to Vercel

This project is structured for deployment on Vercel.

### Client Deployment

The Next.js client can be deployed directly to Vercel. Vercel will automatically detect it as a Next.js project.

### API Deployment

The FastAPI backend (`api/index.py`) will be deployed as a serverless function on Vercel.

**Important Vercel Configuration:**

1.  **Environment Variables:** In your Vercel project settings, you *must* add an environment variable named `MONGO_URI` with your MongoDB connection string.
2.  **CORS:** After deploying, update the `origins` list in `api/index.py` to include your deployed Vercel frontend URL (e.g., `https://your-app-name.vercel.app`) to ensure proper cross-origin communication.

## Project Structure

```
Project29/
├── api/                  # Python FastAPI backend
│   ├── index.py          # Main FastAPI application
│   ├── requirements.txt  # Python dependencies
│   └── upload_audio.py   # Utility to upload audio to MongoDB
├── client/               # Next.js frontend application
│   ├── app/              # Next.js App Router pages and components
│   ├── public/           # Static assets
│   ├── ...               # Other Next.js configuration and files
├── samples/              # Directory for audio files to be uploaded (e.g., english.mp3)
└── .gitignore            # Git ignore rules
└── README.md             # Project README
```