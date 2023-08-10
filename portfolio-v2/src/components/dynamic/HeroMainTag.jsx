import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
    useEffect(() => {
        const options = {
            strings: ["web-sites", "web-apps", "web-Interfaces", "web-anything", "web-everything"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
            showCursor: false,
        };

        const typed = new Typed('.typing-effect', options);

        return () => {
            typed.destroy(); // Cleanup when the component unmounts
        };
    }, []);

    return (
        <div className="typing-effect">
            <span className="typed-text"></span>
        </div>
    );
};

export default TypingAnimation;
