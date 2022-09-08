import React from 'react';
import { useSelector } from 'react-redux';
import './Apple.css';

const Apple = () => {
    
    const { appleXPos, appleYPos } = useSelector((state) => ({
        appleXPos: state.apple.xPos,
        appleYPos: state.apple.yPos
    }));

    return (
        <div data-testid='apple' className='game-apple' style={{ top: appleYPos + 'px', left: appleXPos + 'px' }}></div>
    );
}

export default Apple;