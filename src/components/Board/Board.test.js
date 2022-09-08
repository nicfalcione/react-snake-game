import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { DOWN, LEFT, RIGHT, UP } from "../../constants/constants";
import store from '../../redux/store/store';
import Board from "./Board";

const setupRender = () => {
    return render(
        <Provider store={store}><Board/></Provider>
    )
}

describe('Board Component tests', () => {
    it('Grid should contain specified number of blocks', () => {
        const { queryByTestId } = setupRender();
        expect(queryByTestId('game-board')).toBeInTheDocument();
    });

    it('Matches snapshot', () => {
        const { container } = setupRender();
        expect(container).toMatchSnapshot();
    });

    it('should change direction when pressing up arrow key', async () => {
        const { container } = setupRender();
        act(() => {
            fireEvent.keyDown(container, { key:'ArrowUp', code: 'ArrowUp', keyCode: 38, charCode: 38 });
        });
        expect(store.getState().direction.name).toEqual(UP.name);
    }); 

    it('should change direction when pressing left arrow key', async () => {
        const { container } = setupRender();
        act(() => {
            fireEvent.keyDown(container, { key:'ArrowLeft', code: 'ArrowLeft', keyCode: 37, charCode: 37 });
        });
        expect(store.getState().direction.name).toEqual(LEFT.name);
    });

    it('should change direction when pressing down arrow key', async () => {
        const { container } = setupRender();
        act(() => {
            fireEvent.keyDown(container, { key:'ArrowDown', code: 'ArrowDown', keyCode: 40, charCode: 40 });
        });
        expect(store.getState().direction.name).toEqual(DOWN.name);
    });

    it('should change direction when pressing right arrow key', async () => {
        const { container } = setupRender();
        act(() => {
            fireEvent.keyDown(container, { key:'ArrowRight', code: 'ArrowRight', keyCode: 39, charCode: 39 });
        });
        expect(store.getState().direction.name).toEqual(RIGHT.name);
    });

    it('should change direction when pressing W key', async () => {
        const { container } = setupRender();
        act(() => {
            fireEvent.keyDown(container, { key:'W', code: 'KeyW', keyCode: 87, charCode: 87 });
        });
        expect(store.getState().direction.name).toEqual(UP.name);
    }); 

    it('should change direction when pressing A key', async () => {
        const { container } = setupRender();
        act(() => {
            fireEvent.keyDown(container, { key:'A', code: 'KeyA', keyCode: 65, charCode: 65 });
        });
        expect(store.getState().direction.name).toEqual(LEFT.name);
    });

    it('should change direction when pressing S key', async () => {
        const { container } = setupRender();
        act(() => {
            fireEvent.keyDown(container, { key:'S', code: 'KeyS', keyCode: 83, charCode: 83 });
        });
        expect(store.getState().direction.name).toEqual(DOWN.name);
    });

    it('should change direction when pressing D key', async () => {
        const { container } = setupRender();
        act(() => {
            fireEvent.keyDown(container, { key:'D', code: 'KeyD', keyCode: 68, charCode: 68 });
        });
        expect(store.getState().direction.name).toEqual(RIGHT.name);
    });

    it('should pause and resume game on keydown of P and R respectively', async () => {
        const { container } = setupRender();
        act(() => {
            fireEvent.keyDown(container, { key:'P', code: 'KeyP', keyCode: 80, charCode: 80 });
        });
        expect(store.getState().isRunning).toBeFalsy();

        act(() => {
            fireEvent.keyDown(container, { key:'R', code: 'KeyR', keyCode: 82, charCode: 82 });
        });
        expect(store.getState().isRunning).toBeTruthy();
    }); 
})