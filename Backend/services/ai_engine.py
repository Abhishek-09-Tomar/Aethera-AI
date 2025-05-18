import openai

openai.api_key = "your-openai-key"  # Replace this with your actual OpenAI API key

async def process_user_input(message):
    completion = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a caring, funny and helpful virtual friend."},
            {"role": "user", "content": message}
        ]
    )
    return completion.choices[0].message.content
