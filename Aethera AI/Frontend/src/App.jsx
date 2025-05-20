import ChatBot from './components/ChatBot';
import RegionMessage from './components/RegionMessage';

function App() {
    return (
        <div className="h-screen bg-gradient-to-br from-blue-100 to-purple-200">
            <h1 className="text-3xl font-bold text-center pt-4 text-gray-800">Aethera AI</h1>
            <RegionMessage />
            <ChatBot />
        </div>
    );
}

export default App; 