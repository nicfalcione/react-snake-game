import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from '../../redux/store/store';
import Board from "../Board/Board";

const setupRender = () => {
    return render(
        <Provider store={store}><Board/></Provider>
    );
}

describe('BoardBlock component tests', () => {
    it('Matches snapshot', () => {
        const { container } = setupRender();
        expect(container).toMatchSnapshot();
    })
})