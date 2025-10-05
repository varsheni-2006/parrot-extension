🦜 Parrot — AI Language Learning Assistant

Parrot is an intelligent Chrome extension that helps users reinforce language learning through interactive pop-up quizzes.
It analyzes text from any webpage and generates short vocabulary quizzes using AI.

🧠 Features

✅ Chrome Extension that works on any website
✅ Backend Flask API with OpenAI integration
✅ Dynamic word selection and quiz generation
✅ Simple REST API for text processing
✅ Ready for Docker deployment
 

🧩 1️⃣ Backend Setup (Flask Server)
📦 Step 1 — Create a Virtual Environment
cd server
python -m venv venv
venv\Scripts\activate    # (Windows)

📦 Step 2 — Install Dependencies
pip install -r requirements.txt

🧠 Step 3 — Add OpenAI API Key

Create a file named .env in your server folder:

OPENAI_API_KEY=your_api_key_here

🚀 Step 4 — Run the Flask App
python app.py


Now, the backend runs on
👉 http://127.0.0.1:5000/process_text

🔎 2️⃣ Test the API (Without Browser)

Create a test file test_api.py (already provided):

import requests
response = requests.post(
    "http://127.0.0.1:5000/process_text",
    json={"text": "Learning Spanish is fun."}
)
print("Response from server:")
print(response.text)


Run:

python test_api.py


You’ll get a JSON like:

{
  "chosenWord": "Spanish",
  "quizOptions": ["Spanish", "French", "German", "Italian"]
}

🌍 3️⃣ Frontend — Chrome Extension
📁 Step 1 — Open Chrome and Go to:

👉 chrome://extensions/

📂 Step 2 — Enable Developer Mode (top right)
🟢 Step 3 — Click “Load unpacked”

and select the folder:

GenAI-Hackathon/extension/

✅ Step 4 — Done!

You’ll see the 🦜 Parrot icon appear in your Chrome toolbar.

🧠 Step 5 — Usage

Go to any webpage with text (like a news article).

Click the Parrot icon 🦜.

It’ll show a popup quiz about a random word from the page.

🐳 4️⃣ (Optional) Run with Docker

If you want to containerize your backend:

Create Dockerfile (in /server):
FROM python:3.10-slim

WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt

EXPOSE 5000
CMD ["python", "app.py"]

Build and Run:
docker build -t parrot-server .
docker run -p 5000:5000 parrot-server

🧰 5️⃣ Requirements

Python 3.9+

Flask

OpenAI Python SDK

Chrome Browser (for extension)

Docker (optional)

💬 Example API Response
{
  "chosenWord": "Learning",
  "quizOptions": ["Learning", "Teaching", "Reading", "Writing"]
}

🌈 Future Enhancements

Support for multiple languages

User progress tracking

Speech-based quiz questions

Cloud deployment

👩‍💻 Author

Raja Varsheni
💡 “Synergistic Innovation with Intelligence”
