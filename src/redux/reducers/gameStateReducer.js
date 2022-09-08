import { createReducer } from "@reduxjs/toolkit";
import {
    CHECK_IF_HIT_APPLE,
    CHECK_IF_HIT_SNAKE,
    GAME_OVER, INCREASE_SPEED, MOVE, NEW_GAME, PAUSE_GAME,
    RESUME_GAME, SET_APPLE_POSITION, SET_DIRECTION
} from '../../constants/actionNames';
import { DOWN, LEFT, RIGHT, UP } from '../../constants/constants';
import { checkForCollision } from '../../utils/utils';
import defaultState from '../store/initialState';

export const gameStateReducer = createReducer(defaultState, (builder) => {
    builder
        .addCase(GAME_OVER, (state, action) => {
            state.gameOver = true;
        })
        .addCase(NEW_GAME, (state, action) => {
            Object.assign(state, defaultState);
        })
        .addCase(PAUSE_GAME, (state, action) => {
            state.isRunning = false;
        })
        .addCase(RESUME_GAME, (state, action) => {
            state.isRunning = true;
        })
        .addCase(SET_DIRECTION, (state, action) => {
            let currDirection = state.direction.name;
            let nextDirection = action.payload.name;
            if (!(currDirection === LEFT.name && nextDirection === RIGHT.name || currDirection === RIGHT.name && nextDirection === LEFT.name
                || currDirection === UP.name && nextDirection === DOWN.name || currDirection === DOWN.name && nextDirection === UP.name)) {
                state.direction = action.payload;
            }
        })
        .addCase(MOVE, (state, action) => {
            let { direction, snakeSegments } = state;
            let head = snakeSegments[0];
            let newHeadXPos = head.xPos + direction.x;
            let newHeadYPos = head.yPos + direction.y;
            let key = Math.max(...snakeSegments.map(obj => obj.key)) + 1;
            snakeSegments.unshift({
                key: key,
                xPos: newHeadXPos,
                yPos: newHeadYPos
            });
        })
        .addCase(SET_APPLE_POSITION, (state, action) => {
            state.apple.xPos = action.payload.xPos;
            state.apple.yPos = action.payload.yPos;
        })
        .addCase(CHECK_IF_HIT_APPLE, (state, action) => {
            if (checkForCollision(state.snakeSegments[0].xPos, state.snakeSegments[0].yPos, state.apple.xPos, state.apple.yPos, 10)) {
                state.score += 50;
                let randomX = Math.floor(Math.random() * 720) + 20;
                let randomY = Math.floor(Math.random() * 420) + 20;
                state.apple.xPos = randomX - (randomX % 20);
                state.apple.yPos = randomY - (randomY % 20);
            } else {
                state.snakeSegments.pop();
            }
        })
        .addCase(CHECK_IF_HIT_SNAKE, (state, action) => {
            let collision = false;
            if (state.snakeSegments[0].xPos < 0 || state.snakeSegments[0].xPos > 780
                || state.snakeSegments[0].yPos < 0 || state.snakeSegments[0].yPos > 440) {
                collision = true;
            } else {
                for (let i = 0; i < state.snakeSegments.length; i++) {
                    if (checkForCollision(state.snakeSegments[0].xPos, state.snakeSegments[0].yPos, state.snakeSegments[i].xPos, state.snakeSegments[i].yPos, 10)) {
                        collision = true;
                        break;
                    }
                }
            }

            if (collision) {
                state.gameOver = true;
                state.isRunning = false;
            }
        })  
        .addCase(INCREASE_SPEED, (state, action) => {
            state.speed -= 5;
        })  
        .addDefaultCase((state, action) => {});
});