import React from "react";
import './SnakeSegment.css';

const SnakeSegment = ({xPos, yPos}) => {
    return (
        <div className="game-snake-segment" style={{ left: xPos + 'px', top: yPos + 'px' }}></div>
    );
}

export default SnakeSegment;