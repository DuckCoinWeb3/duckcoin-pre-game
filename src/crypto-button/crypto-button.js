import React, { useState } from 'react';
import './crypto-button.css';


const CryptoButton = () => {
    const [score, setScore] = useState(0);
    const [isPressed, setIsPressed] = useState(false);

    const handleButtonClick = () => {
        setScore(score + 1);
        const audio = new Audio(`${process.env.PUBLIC_URL}/assets/cuak-sound-effect.mp3`);
        audio.play();
    };

    const handleMouseDown = () => {
        setIsPressed(true);
    };

    const handleMouseUp = () => {
        setIsPressed(false);
    };

    const handleTouchStart = () => {
        setIsPressed(true);
    };

    const handleTouchEnd = () => {
        setIsPressed(false);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Duck Coin</h1>
            <p>{score}</p>
            <div style={{ width: '100%' }}>
                <button
                    className={`animal-button ${isPressed ? 'pressed' : ''}`}
                    onClick={handleButtonClick}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onTouchCancel={handleTouchEnd}
                >
                    <img src={process.env.PUBLIC_URL + '/assets/duck.png'} alt="tap" className="animal-image" />
                </button>
            </div>
        </div>
    );
};

export default CryptoButton;
