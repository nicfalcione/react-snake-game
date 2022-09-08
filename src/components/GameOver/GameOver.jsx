import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newGame } from '../../redux/actions/gameStateActions';
import './GameOver.css';

const GameOver = () => {
    const [isClosed, setIsClosed] = useState(false);
    const dispatch = useDispatch();

    const { gameOver } = useSelector((state) => ({
        gameOver: state.gameOver
    }));

    const onClickNewGame = () => {
        dispatch(newGame());
    }

    const onClickClose = () => {
        setIsClosed(true);
    }

    return (
        <>
            {
                gameOver && !isClosed &&
                <div className="game-over-dialog">
                    <div className="game-over-dialog-header">Game Over!</div>
                    <div className="game-over-dialog-content">
                        <button className="game-over-button" onClick={onClickClose}>Close</button>
                        <button className="game-over-button" onClick={onClickNewGame}>New Game</button>
                    </div>
                </div>
            }
        </>
    );
}

export default GameOver;