import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from '../../redux/store/store';
import Snake from '../Snake/Snake';

const setupRender = () => {
    return render(
        <Provider store={store}><Snake/></Provider>
    );
}

describe('SnakeSegment component tests', () => {
    it('should match snapshot', () => {
        const { container } = setupRender();
        expect(container).toMatchSnapshot();
    });
});