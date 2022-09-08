import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
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
    })
})