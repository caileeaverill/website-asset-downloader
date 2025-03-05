from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

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

class RequestData(BaseModel):
    data: str

@app.post("/your-endpoint")
async def handle_data(request_data: RequestData):
    return {"message": f"Data received: {request_data.data}"}