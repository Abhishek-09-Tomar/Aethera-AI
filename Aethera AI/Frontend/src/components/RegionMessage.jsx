import React, { useEffect, useState } from 'react';

const RegionMessage = () => {
    const [regionMessage, setRegionMessage] = useState('');

    useEffect(() => {
        // Simulate user region — in production, fetch this dynamically
        const userRegion = "asia"; // Example: "asia", "africa", "europe", "china", "america"

        const regionMessages = {
            asia: "Your AI buddy who truly understands the emotions, traditions, and hustle of Asian life.",
            africa: "Aethera AI – your soulful companion, walking beside you with the rhythm of African warmth and wisdom.",
            europe: "Your calm and thoughtful AI companion – here to listen, reflect, and grow with you across every season.",
            america: "From dreams to doubts, your AI friend is here for every late-night talk and early-morning inspiration.",
            china: "Aethera AI is your trusted companion, harmonizing with the values of family, balance, and resilience."
        };

        const message = regionMessages[userRegion] || "Your AI friend who is always here to listen and support you, wherever you are.";
        setRegionMessage(message);
    }, []);

    return <p>{regionMessage}</p>;
};

export default RegionMessage; 