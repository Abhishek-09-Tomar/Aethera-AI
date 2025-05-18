import { useState } from 'react';

function ChatBot() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        const userMessage = { sender: "You", text: input };
        setMessages([...messages, userMessage]);
        setInput("");

        const res = await fetch("http://localhost:8000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input })
        });
        const data = await res.json();
        const botMessage = { sender: "MindMate 🤖", text: data.reply };
        setMessages(prev => [...prev, botMessage]);
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded-2xl shadow-lg">
            <div className="h-64 overflow-y-auto space-y-2">
                {messages.map((msg, i) => (
                    <p key={i}><strong>{msg.sender}:</strong> {msg.text}</p>
                ))}
            </div>
            <div className="mt-4 flex gap-2">
                <input
                    className="flex-1 p-2 border rounded"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && sendMessage()}
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={sendMessage}>
                    Send
                </button>
            </div>
        </div>
    );
}

export default ChatBot;
