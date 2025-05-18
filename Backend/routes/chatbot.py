from fastapi import APIRouter, Request
from services.ai_engine import process_user_input

router = APIRouter()

@router.post("/chat")
async def chat_route(request: Request):
    data = await request.json()
    user_input = data.get("message")
    response = await process_user_input(user_input)
    return {"reply": response}
