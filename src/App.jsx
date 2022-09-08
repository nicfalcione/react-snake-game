import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Board from './components/Board/Board';
import GameOver from './components/GameOver/GameOver';
import Header from './components/Header/Header';
import { checkIfHitApple, checkIfHitSnake, move } from "./redux/actions/gameStateActions";


const App = () => {
    const { isRunning, speed } = useSelector((state) => ({
        isRunning: state.isRunning,
        speed: state.speed
    }));

    const requestRef = useRef();
    const lastUpdateTimeRef = useRef(0);
    const progressTimeRef = useRef(0);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isRunning) {
            requestRef.current = requestAnimationFrame(update);
        } else {
            cancelAnimationFrame(requestRef.current);
        }
        return () => cancelAnimationFrame(requestRef.current);
    }, [isRunning, speed]);

    const update = (time) => {
        requestRef.current = requestAnimationFrame(update);
        if (!isRunning) {
            return;
        }
        if (!lastUpdateTimeRef.current) {
            lastUpdateTimeRef.current = time;
        }
        const deltaTime = time - lastUpdateTimeRef.current;
        progressTimeRef.current += deltaTime;
        if (progressTimeRef.current > speed) {
            dispatch(move());
            dispatch(checkIfHitSnake());
            dispatch(checkIfHitApple());
            progressTimeRef.current = 0;
        }
        lastUpdateTimeRef.current = time;
    }

    return (
        <div className="app-container">
            <div className="game-container">
                <GameOver/>
                <Header/>
                <Board/>
            </div>
        </div>
    );
}

export default App;