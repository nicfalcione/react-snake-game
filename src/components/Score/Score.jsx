import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseSpeed, pauseGame, resumeGame } from '../../redux/actions/gameStateActions';
import './Score.css';

const Score = ({ score }) => {
    const dispatch = useDispatch();

    const { isRunning, gameOver } = useSelector((state) => ({
        isRunning: state.isRunning,
        gameOver: state.gameOver
    }));

    const formatScore = (score) => {
        return `Score: ${score}`;
    }

    const onClickScore = (e) => {
        if (!gameOver) {
            if (isRunning) {
                dispatch(pauseGame());
            } else {
                dispatch(resumeGame());
            }
        }
    }

    useEffect(() => {
        if (score > 0 && score % 500 === 0) {
            dispatch(increaseSpeed());
        }
    }, [score]);

    return (
        <span className="game-score" onClick={onClickScore}>{formatScore(score)}</span>
    );
}

export default Score;