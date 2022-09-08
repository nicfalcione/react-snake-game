import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from '../../redux/store/store';
import Header from './Header';

const setupRender = () => {
    return render(
        <Provider store={store}><Header/></Provider>
    )
}

describe('Header component tests', () => {
    it('should render the Game name in the header', () => {
        const { getByText } = setupRender();
        expect(getByText('Snake')).toBeInTheDocument();
        expect(getByText('Score: 0')).toBeInTheDocument();
    });

    it('should match the snapshot', () => {
        const { container } = setupRender();
        expect(container).toMatchSnapshot();
    });
});