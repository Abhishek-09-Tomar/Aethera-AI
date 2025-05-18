# 🧠 Aethera AI – Your AI-Powered Virtual Companion

**Aethera AI** is an intelligent, conversational virtual companion that adapts to your emotional, mental, and financial state in real-time. Whether you're seeking support, humor, or structured growth, Aethera delivers deeply personalized conversations and actionable roadmaps — redefining human-AI interaction for a more empowered you.

---

## 🌟 Core Features

* 🎙️ **Conversational Agent**
  Human-like conversations with voice support (male/female)

* 😂 **Mood-Based Humor**
  Context-aware jokes that align with your emotional state

* 🧠 **Emotion & State Memory**
  Understands and remembers your mental, emotional, and financial patterns

* 🗺️ **Intelligent Growth Roadmaps**
  Curated suggestions for personal development: emotional health, fitness, finances, and more

* 🧾 **Persistent Memory**
  Tracks past interactions to provide consistent, personalized experiences

* 🎯 **Progress Monitoring**
  Offers regular nudges, reminders, and progress tracking

---

## 🚀 Tech Stack

| Layer        | Technology Stack                 |
| ------------ | -------------------------------- |
| **Frontend** | React, Tailwind CSS              |
| **Backend**  | FastAPI, Python, OpenAI (GPT-4)  |
| **API**      | RESTful API (FastAPI)            |
| **IDE**      | Cursor AI (Recommended)          |
| **Tools**    | Git, VS Code / IntelliJ / Cursor |

---

## 🏗️ Project Structure

```
mindmate/
│
├── backend/                 
│   ├── main.py              ← API entry point (FastAPI)
│   ├── models.py            ← Pydantic models (for request/response)
│   ├── routes/
│   │   └── chatbot.py       ← Chatbot logic
│   ├── services/
│   │   └── ai_engine.py     ← GPT-4 logic & integration
│   └── requirements.txt     ← Python dependencies
│
├── frontend/                
│   ├── public/              ← Static assets
│   ├── src/
│   │   ├── components/
│   │   │   └── ChatBot.jsx  ← Core chat UI
│   │   ├── App.jsx          ← Main application layout
│   │   └── main.jsx         ← React entry point
│   ├── tailwind.config.js   ← TailwindCSS configuration
│   └── package.json         ← NPM dependencies
│
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### ✅ Prerequisites

* Node.js ≥ 18.x
* Python ≥ 3.10
* OpenAI API Key
* Git

---

### 🔧 Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

> 🔐 **Configure your API key**
> Edit `backend/services/ai_engine.py`:

```python
openai.api_key = "your-openai-key"
```

Preferably use `.env` for secure storage in production environments.

---

### 🎨 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

* Access frontend: `http://localhost:5173`
* Backend should be active at: `http://localhost:8000`

---

## 📡 API Endpoint

### POST `/chat`

**Request:**

```json
{
  "message": "I'm feeling anxious and broke."
}
```

**Response:**

```json
{
  "reply": "I'm here for you 💙. Let's talk about how to reduce stress and start building financial independence..."
}
```

---

## 🧠 Upcoming Enhancements

* [ ] Persistent user sessions across devices
* [ ] Sentiment analysis & mood inference using NLP
* [ ] Voice output using TTS (Text-to-Speech)
* [ ] Admin dashboard for usage insights
* [ ] AI-generated life/career roadmaps
* [ ] Smart reminders for daily check-ins

---

## 🌍 Deployment Plan

* **Backend**: Render / Railway / Fly.io
* **Frontend**: Vercel / Netlify
* **Secrets**: Managed via `.env` and CI/CD pipelines

---

## 🤝 Contribution Guidelines

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/mindmate.git
   ```

2. **Create a new branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes and push**

   ```bash
   git commit -m "Add: your feature"
   git push origin feature/your-feature-name
   ```

> Open a pull request and let’s build Aethera together 🚀

---

## 👨‍💻 Project Lead

**Abhishek Tomar**
AI Engineer & Full Stack Developer
🔗 [LinkedIn](https://www.linkedin.com/in/abhishek-tomar-7aa29127b)
💻 [GitHub](https://github.com/Abhishek-09-Tomar)
📹 [YouTube](https://www.youtube.com/@i_am_abhishek_tomar)

---

## 📜 License

This project is licensed under the **MIT License**.
Feel free to use, extend, and contribute.

---

## 💬 Final Thought

> *“The mind is not a vessel to be filled but a fire to be kindled.”*
> Let **Aethera AI** be the spark that ignites transformation for millions. 🔥

---

Let me know if you'd like this exported as `README.md` or committed directly to your GitHub repository.
