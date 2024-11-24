from fastapi import FastAPI, HTTPException,status
from model import User
from dotenv import load_dotenv
import os
import uvicorn
from fastapi.middleware.cors import CORSMiddleware


load_dotenv()

app = FastAPI()


origins = [

    "http://localhost:8081",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    # allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# fastapi dev main.py  // for running server with auto-reload




users ={
    "username": "password",
    "test": "test123"
}

@app.post('/login', status_code=status.HTTP_200_OK)
async def login(loginUser: User):
    """Login a user."""
    if not(loginUser.username) or not(loginUser.password):
        raise HTTPException(
            status_code=400,
            detail= "Missing username or Password"
        )
    elif not(users.get(loginUser.username, False)):
        raise HTTPException(
            status_code=403,
            detail="User does not exist"
        )
    elif users.get(loginUser.username) != loginUser.password:   
         raise HTTPException(
            status_code=403,
            detail="Incorrect password"
        )

    return {"response": "success"}

@app.get('/')
def test():
    return {"response": "test"}








if __name__ == "__main__":
    uvicorn.run(app=app, host=os.getenv("host"), port=int(os.getenv("port")))
