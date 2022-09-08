import React from "react";
import { useSelector } from "react-redux";
import SnakeSegment from '../SnakeSegment/SnakeSegment';
import './Snake.css';

const Snake = () => {
    const snakeSegments = useSelector((state) => state.snakeSegments);

    return (
        <>
            {
                snakeSegments.map(segment =>
                    <SnakeSegment key={segment.key}
                                  xPos={segment.xPos}
                                  yPos={segment.yPos}
                    /> 
                )
            }
        </>
    );
}

export default Snake;