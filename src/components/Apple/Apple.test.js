import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from '../../redux/store/store';
import Apple from './Apple';
 
const setupRender = () => {
    return render(<Provider store={store}><Apple/></Provider>);
}

describe('Apple Component test', () => {
    it('Apple renders', () => {
        const { queryByTestId } = setupRender();
        expect(queryByTestId('apple')).toBeInTheDocument();
    })

    it('should match snapshot', () => {
        const { baseElement } = setupRender();
        expect(baseElement).toMatchSnapshot();
    })
})