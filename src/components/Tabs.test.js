import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Tabs from "./Tabs";


describe('Tabs components snapshot', () => {
    test('renders correctly', () => {
        const tree = renderer.create(<Tabs />);
        
        expect(tree.toJSON()).toMatchSnapshot();
    })
})

describe('Tabs components', () => {
    test('renders two tab items', () => {
        render(<Tabs />);

        const tabItems = screen.getAllByRole("listitem");
        expect(tabItems.length).toBe(2);
    })

    test('renders SevRoll tab items', () => {
        render(<Tabs />);

        const tabItems = screen.getByText("SevRoll");
        expect(tabItems).toBeInTheDocument();
    })

    test('renders Reach50 tab items', () => {
        render(<Tabs />);

        const tabItems = screen.getByText("Reach50");
        expect(tabItems).toBeInTheDocument();
    })
})