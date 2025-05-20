import { useState } from 'react';
import { validateInput, createMessage, sendChatMessage } from '../script';

function ChatBot() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        if (!validateInput(input)) return;

        const userMessage = createMessage("You", input);
        setMessages(prev => [...prev, userMessage]);
        setInput("");

        try {
            const data = await sendChatMessage(input);
            const botMessage = createMessage("Aethera 🤖", data.reply);
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            const errorMsg = createMessage("Aethera 🤖", "Oops! Something went wrong.");
            setMessages(prev => [...prev, errorMsg]);
        }
    };

    return (
        <div className="chat-container">
            <div className="messages-container">
                {messages.map((msg, i) => (
                    <div key={i}>
                        <span className="message-sender">{msg.sender}: </span>
                        <span>{msg.text}</span>
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && sendMessage()}
                    className="chat-input"
                    placeholder="Talk to Aethera..."
                />
                <button
                    onClick={sendMessage}
                    className="send-button"
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default ChatBot; 