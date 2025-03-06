from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import subprocess
import json
import requests

app = FastAPI()

# Define allowed origins (you can add more if needed)
origins = [
    "http://localhost:5173",  # React app running on Vite
]

# Add CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows all origins specified in the list
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Define the model for the URL data
class RequestData(BaseModel):
    data: str

@app.post("/send-data-to-downloader")
async def send_data_to_downloader(request_data: RequestData):
    """
    Endpoint to receive the URL and forward it to downloader.py for BeautifulSoup parsing
    """
    try:
        # Call downloader.py using subprocess, passing the URL data
        result = subprocess.run(
            ['python3', 'downloader.py'],
            input=json.dumps(request_data.dict()),  # Send the data as JSON
            text=True,
            capture_output=True
        )
        
        # Return the output from downloader.py (the result of parsing)
    return {
            "message": "Data sent to downloader",
            "output": result.stdout
        }
    
    except Exception as e:
        # Handle any errors that occur during the subprocess execution
        return {"error": f"Failed to send data to downloader: {str(e)}"}