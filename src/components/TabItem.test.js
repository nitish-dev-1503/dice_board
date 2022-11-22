import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import TabItem from './TabItem';


describe('TabItem component', () => {
    test('renders one item list', () => {
        const { getAllByRole } = render(<TabItem />);

        const tabItem = getAllByRole('listitem');
        expect(tabItem).toHaveLength(1);
    })

    test('renders item list with correct title', () => {
        const title = "SevRoll";
        render(<TabItem title={title} />);

        const tabItem = screen.getByText(title);
        expect(tabItem).toBeInTheDocument();
    })

    test('calls setActiveTab with tab id when clicked', () => {
        const tabId = "123";
        const title = "SevRoll";
        const mockedSetActiveTab = jest.fn();
        render(<TabItem id={tabId} title={title} setActiveTab={mockedSetActiveTab} />);

        const tabItem = screen.getByText(title);
        userEvent.click(tabItem);

        expect(mockedSetActiveTab).toBeCalledWith(tabId);
    })
})