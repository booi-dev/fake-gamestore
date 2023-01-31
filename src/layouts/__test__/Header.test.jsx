/* eslint-disable */
import { MemoryRouter } from 'react-router-dom';
import { test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App'
import Header from "../Header";
import Community from "../../pages/Community"

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

test('should render Community component when click', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const communityBtn = screen.getByTestId('header-community-menuBtn')
    fireEvent.click(communityBtn);
    const communityPage = screen.getByText('community page')
    expect(communityPage).toBeInTheDocument()
})

