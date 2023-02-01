/* eslint-disable */
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App'
import Header from "../Header";

test('should render header layout', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    const userName = screen.queryByText('BO GAMES')
    expect(userName).toBeVisible();
})

test('should render site-title', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    const siteTitle = screen.getByTestId('header-siteTitle')
    expect(siteTitle).toBeVisible();
})

test('should return five list', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    const listElement = screen.getByRole('list')
    const listItems = screen.queryAllByRole('listitem');
    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveClass('navbar__list')
    expect(listItems).toHaveLength(5);
})

test('should render Community component when click', async () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const communityBtn = screen.getByTestId('header-community-menuBtn')
    await userEvent.click(communityBtn);
    const communityPage = screen.getByText('community page')
    expect(communityPage).toBeInTheDocument()
})


test('should render Support page when Support menu btn is clicked', async () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const supportBtn = screen.getByTestId('header-support-menuBtn')
    const user = userEvent.setup()
    await user.click(supportBtn);
    const supportPage = screen.getByText('support')
    expect(supportPage).toBeInTheDocument()
    // expect(location.pathname).toBe('/support');
})
