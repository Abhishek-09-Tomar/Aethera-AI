# 🧠 Aethera AI – Your AI-Powered Virtual Companion

**Aethera AI** is an intelligent, emotionally aware virtual companion designed to interact naturally with users, offer empathetic support, and craft personalized growth roadmaps across emotional, mental, physical, and financial dimensions. Built with cutting-edge AI, Aethera adapts to your state of mind and evolves with you.

---

## 🌟 Core Features

- 🎙️ **Conversational Agent** – Human-like interaction with gender-selectable voice interface  
- 😂 **Mood-Based Humor** – Delivers jokes tailored to your emotional state  
- 🧠 **Contextual Memory** – Remembers your emotional, physical, and financial states over time  
- 🗺️ **Growth Roadmaps** – Recommends strategic plans for wellness, career, and financial independence  
- 📈 **Goal Tracking** – Monitors your progress and provides consistent support  
- 🧾 **Smart Recall** – Recalls past conversations for a personalized experience

---

## 🚀 Technology Stack

| Layer       | Stack                            |
|-------------|----------------------------------|
| **Frontend** | React, HTML, CSS, JS,            |
| **Backend**  | FastAPI, Python, OpenAI GPT-4    |
| **API Layer**| REST (FastAPI)                   |
| **Tools**    | Git, VS Code, Cursor, IntelliJ   |
| **IDE**      | Cursor AI (recommended)          |

---

## 🏗️ Project Structure

```
Aethera AI/
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── Backend/
│   ├── routes/
│   ├── services/
│   ├── main.py
│   ├── models.py
│   └── requirements.txt
│
└── README.md
```

---

## ⚙️ Getting Started

### ✅ Prerequisites

- Node.js ≥ 18.x  
- Python ≥ 3.10  
- Git  
- OpenAI API Key

---

### 🔧 Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate   # For Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

🔑 Configure your OpenAI key in `services/ai_engine.py` or use a `.env` file:

```python
openai.api_key = "your-openai-key"
```

---

### 🎨 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

📍 App: [http://localhost:5173](http://localhost:5173)  
🧠 API: [http://localhost:8000](http://localhost:8000)

---

## 📡 API Reference

### `POST /chat`

#### Request

```json
{
  "message": "I'm feeling anxious and broke."
}
```

#### Response

```json
{
  "reply": "I'm here for you 💙. Let's talk about how to reduce stress and start building financial independence..."
}
```

---

## 🧩 Upcoming Features

- [ ] Persistent user memory
- [ ] Mood inference via sentiment analysis
- [ ] Text-to-speech dynamic voice
- [ ] Admin analytics dashboard
- [ ] Roadmap generators (career, health, finance)
- [ ] Notification system for daily emotional check-ins

---

## 🌍 Deployment Plans

- 🔐 Backend: Render / Railway / Fly.io  
- 🌐 Frontend: Vercel / Netlify  
- 📁 Environment Secrets: `.env` file-based storage

---

## 🤝 Contributing Guidelines

We welcome developers, designers, and thinkers to contribute to Aethera AI and shape the future of emotionally intelligent technology.

### 🧭 How to Contribute

1. **Fork the repository**  
   [Aethera-AI GitHub](https://github.com/Abhishek-09-Tomar/Aethera-AI)

2. **Clone your fork locally**
   ```bash
   git clone https://github.com/your-username/Aethera-AI.git
   cd Aethera-AI
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feat/your-feature-name
   ```

4. **Make your changes**  
   Follow code standards, write clean commit messages, and test thoroughly.

5. **Commit and push**
   ```bash
   git commit -m "feat: Add new feature description"
   git push origin feat/your-feature-name
   ```

6. **Open a Pull Request (PR)**  
   - Provide a meaningful title & description  
   - Link related issues if any  
   - Ensure all checks pass

7. **Review Process**  
   - Core team will review within 48 hours  
   - Feedback will be constructive and supportive

---

## 👨‍💻 Built & Maintained By

**Abhishek Tomar**  
🔗 [LinkedIn](https://www.linkedin.com/in/abhishek-tomar-7aa29127b) | 💻 [GitHub](https://github.com/Abhishek-09-Tomar) | 📹 [YouTube](https://www.youtube.com/@i_am_abhishek_tomar)

---

## 📜 License

Licensed under the MIT License.  
You are free to use, modify, and distribute with attribution.

---

## ✨ Final Thought

> “The mind is not a vessel to be filled, but a fire to be kindled.”  
Let **Aethera AI** be that spark for millions. 🔥
