import React from 'react';

const StartButton = ({ callback }) => (
    <button className="start-button" onClick={callback}>
        Start Game
    </button>
);

export default StartButton;
