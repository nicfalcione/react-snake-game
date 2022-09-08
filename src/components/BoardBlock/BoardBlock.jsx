import React from "react";
import './BoardBlock.css';

const BoardBlock = ({ color }) => {

    return (
        <div className="board-block" style={{ backgroundColor: color }}></div>
    )
}

export default BoardBlock;