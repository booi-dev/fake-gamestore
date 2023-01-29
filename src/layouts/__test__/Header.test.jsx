/* eslint-disable */
import { MemoryRouter } from 'react-router-dom';
import { test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import Header from "../Header";

test('should render header layout', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    const userName = screen.queryByText('BO GAMES')
    expect(userName).toBeVisible();
})

test('should return five list', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    const listElement = screen.getByRole('list')
    const listItems = screen.queryAllByRole('listitem');
    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveClass('navbar__list')
    expect(listItems).toHaveLength(5);
})


