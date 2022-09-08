import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import App from '../../App';
import { gameOver } from "../../redux/actions/gameStateActions";
import store from '../../redux/store/store';

const setupRender = () => {
    return render(
        <Provider store={store}><App/></Provider>
    );
}

describe('GameOver Component dialog tests', () => {
    it('should not display the GameOver component to the user on', () => {
        const { queryByText } = setupRender();
        expect(queryByText('Game Over!')).not.toBeInTheDocument();
    });

    it('should open GameOver component on game over', async () => {
        const { getByText } = setupRender();
        act(() => {
            store.dispatch(gameOver());
        });
        expect(getByText('Game Over!')).toBeInTheDocument();
    });

    it('should close GameOver component on click of close button', async () => {
        const { getByText, queryByText } = setupRender();
        store.dispatch(gameOver());
        act(() => {
            fireEvent.click(getByText('Close'));
        });
        expect(queryByText('Game Over!')).not.toBeInTheDocument();
    });

    it('should close GameOver component on click of New Game button and reset score', async () => {
        const { getByText, queryByText } = setupRender();
        store.dispatch(gameOver());
        act(() => {
            fireEvent.click(getByText('New Game'));
        });
        expect(queryByText('Game Over!')).not.toBeInTheDocument();
        expect(getByText('Score: 0')).toBeInTheDocument();
    });

    it('Matches snapshot', () => {
        const { container } = setupRender();
        expect(container).toMatchSnapshot();
    })
})