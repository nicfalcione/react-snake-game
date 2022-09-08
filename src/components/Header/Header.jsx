import React from "react";
import { useSelector } from "react-redux";
import Score from '../Score/Score';
import './Header.css';

const Header = () => {
    const score = useSelector((state) => state.score);

    return (
        <div className="game-header">
            <div className="game-score-wrapper">
                <span className="game-over-name">Snake</span>
                <Score score={ score }></Score>
            </div>
        </div>
    );
}

export default Header;