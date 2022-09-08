import {
    CHECK_IF_HIT_APPLE,
    CHECK_IF_HIT_SNAKE, GAME_OVER, INCREASE_SPEED, MOVE, NEW_GAME, PAUSE_GAME,
    RESUME_GAME, SET_APPLE_POSITION, SET_DIRECTION
} from '../../constants/actionNames';

export const gameOver = () => ({type: GAME_OVER});
export const pauseGame = () => ({type: PAUSE_GAME});
export const resumeGame = () => ({type: RESUME_GAME});
export const newGame = () => ({type: NEW_GAME});

export const move = (value) => {
    return {
        type: MOVE,
        payload: value
    };
};

export const setDirection = (value) => {
    return {
        type: SET_DIRECTION,
        payload: value
    };
};

export const setApplePosition = (value) => {
    return {
        type: SET_APPLE_POSITION,
        payload: value
    };
};

export const checkIfHitApple = (value) => {
    return {
        type: CHECK_IF_HIT_APPLE,
        payload: value
    };
};

export const checkIfHitSnake = () => ({type: CHECK_IF_HIT_SNAKE});
export const increaseSpeed = () => ({type: INCREASE_SPEED});