import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pauseGame, resumeGame, setDirection } from '../../redux/actions/gameStateActions';
import Apple from '../Apple/Apple';
import BoardBlock from '../BoardBlock/BoardBlock';
import Snake from '../Snake/Snake';
import './Board.css';

const Board = () => {
    const dispatch = useDispatch();

    const handleKeyPress = (e) => {
        switch (e.keyCode) {
            case 37:
                dispatch(setDirection(LEFT));
                break;
            case 38:
                dispatch(setDirection(UP));
                break;
            case 39:
                dispatch(setDirection(RIGHT));
                break;
            case 40:
                dispatch(setDirection(DOWN));
                break;
            case 87:
                dispatch(setDirection(UP));
                break;
            case 65:
                dispatch(setDirection(LEFT));
                break;
            case 83:
                dispatch(setDirection(DOWN));
                break;
            case 68:
                dispatch(setDirection(RIGHT));
                break;
            case 80:
                dispatch(pauseGame());
                break;
            case 82:
                dispatch(resumeGame());
                break;     
        }
    }

    const buildBoardGrid = () => {
        const grid = [];
        const width = 800;
        const height = 460;

        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                let color = '';
                if ((j / 20) % 2 === 0 && (i / 20) % 2 === 0) {
                    color = 'white';
                } else if ((j / 20 ) % 2 === 1 && (i / 20) % 2 === 0) {
                    color = 'whitesmoke'
                } else if ((j / 20) % 2 === 0 && (i / 20) === 2 === 1) {
                    color = 'whitesmoke'
                } else {
                    color = 'white';
                }
                grid.push({key: i + ' ' + j + ' block', color: color});
            }
        }
        return grid;
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        }
    }, []);

    return (
        <div data-testid='game-board' className='board-box'>
            {
                buildBoardGrid().map(block => 
                    <BoardBlock key={block.key}
                                color={block.color}
                                xPos={block.xPos}
                                yPos={block.yPos}
                    />
                )
            }
            <Snake/>
            <Apple/>
        </div>
    )
}

export default Board;