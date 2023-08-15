import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
    useEffect(() => {
        const options = {
            strings: ["web-anything", "web-everything",  "web-sites", "web-apps", " web-Interfaces"],
            typeSpeed: 80,
            backSpeed: 80,
            backDelay: 1000,
            loop: true,
            showCursor: false,
        };

        const typed = new Typed('.typing-effect', options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="typing-effect">
            <span className="typed-text"></span>
        </div>
    );
};

export default TypingAnimation;
