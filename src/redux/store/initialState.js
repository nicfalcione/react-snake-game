import { RIGHT } from '../../constants/constants';

const defaultState = {
    isRunning: true,
    gameOver: false,
    direction: RIGHT,
    score: 0,
    speed: 100,
    snakeSegments:[
        {
            key: 1,
            xPos: 380,
            yPos: 220
        },
        {
            key: 2,
            xPos: 360,
            yPos: 220
        },
        {
            key: 3,
            xPos: 340,
            yPos: 220
        }
    ],
    apple: {
        xPos: 400,
        yPos: 400
    }
};

export default defaultState;