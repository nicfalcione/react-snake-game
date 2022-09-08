import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { gameOver } from "../../redux/actions/gameStateActions";
import store from '../../redux/store/store';
import Score from './Score';

const setupRender = (score) => {
    return render(
        <Provider store={store}><Score score={score}/></Provider>
    )
};

describe('Score component tests', () => {
    it('should show the score formatted on render', () => {
        const { getByText } = setupRender(0);
        expect(getByText('Score: 0')).toBeInTheDocument();
    });

    it('should pause/resume the game when clicking the score', async () => {
        const { getByText } = setupRender(300);
        act(() => {
            fireEvent.click(getByText('Score: 300'));
        });
        expect(store.getState().isRunning).toBeFalsy();

        act(() => {
            fireEvent.click(getByText('Score: 300'));
        }); 
        expect(store.getState().isRunning).toBeTruthy();
    });

    it('should do nothing when clicking the score if the game is over', async () => {
        const { getByText } = setupRender(500);
        act(() => {
            store.dispatch(gameOver());
            fireEvent.click(getByText('Score: 500'));
        });
        expect(store.getState().isRunning).toBeFalsy();
    });

    xit('should increase speed when the score hits 500', () => {
        const { getByText } = setupRender(0);
        expect(store.getState().speed).toBe(100);
    });

    it('should match snapshot', () => {
        const { container } = setupRender();
        expect(container).toMatchSnapshot();
    });
})