import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from '../../redux/store/store';
import Snake from './Snake';

const setupRender = () => {
    return render(
        <Provider store={store}><Snake/></Provider>
    );
}

describe('Snake component tests', () => {
    it('should match snapshot', () => {
        const { container } = setupRender();
        expect(container).toMatchSnapshot();
    });
});