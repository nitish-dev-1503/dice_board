import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react"
import App from "./App";


jest.mock('./components/Tabs', () => () => {
    const mockedTabs = <div data-testid='tabs' />;
    return mockedTabs;
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
        render(<App />);

        const tabs = screen.getByTestId('tabs');
        expect(tabs).toBeInTheDocument();
    })

    test('renders footer', () => {
        render(<App />);

        const footer = screen.getByText('All rights reserved | Nitish Sharma');
        expect(footer).toBeInTheDocument();
    })
})