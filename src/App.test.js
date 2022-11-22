import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import App from "./App";


describe('App components snapshot', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<App />).toJSON();

        expect(tree).toMatchSnapshot();
    })
});

describe('App component', () => {
    test('renders logo', () => {
        render(<App />);

        const logo = document.querySelector('img');
        expect(logo.alt).toBe('logo');
    })

    test('renders title', () => {
        render(<App />);

        const title = screen.getByText('Let\'s Play with Dice', { exact: false });
        expect(title).toBeInTheDocument();
    })

    test('renders Tabs component', () => {
        const { getAllByRole } = render(<App />);

        const tabs = getAllByRole("listitem")
        expect(tabs.length).toBe(2);
    })

    test('renders footer', () => {
        render(<App />);

        const footer = screen.getByText('All rights reserved | Nitish Sharma');
        expect(footer).toBeInTheDocument();
    })
})