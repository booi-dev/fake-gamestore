/* eslint-disable */
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from "../Search";
import SearchSuggestion from '../SearchSuggestion';


describe('testing search component', () => {

    test('should be render', () => {
        render(<MemoryRouter><Search /></MemoryRouter>);

        const searchInputEl = screen.getByRole('textbox')
        expect(searchInputEl).toBeInTheDocument()

        const searchButtonEl = screen.getByRole('button')
        expect(searchButtonEl).toBeInTheDocument()
    })

    test('should update the input field value when user types', async () => {
        render(<MemoryRouter><Search /></MemoryRouter>);
        const inputField = screen.getByRole('textbox')
        const user = userEvent.setup()
        await user.type(inputField, 'hello');
        expect(inputField.value).toBe('hello');
    })


    const game = {
        background_imag: 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'testing'
    }

    test('should render search suggestions', () => {
        render(<SearchSuggestion game={game} />);
        const gameBgImg = screen.getByRole('img')
        expect(gameBgImg).toBeInTheDocument();

        const gameName = screen.getByRole('heading')
        expect(gameName).toBeInTheDocument();
    })

    // test('input tag should not have focus', () => {
    //     render(<Search />);
    //     const searchElement = screen.getByRole('search')
    //     const user = userEvent.setup()
    //     user.tab()
    //     expect(searchElement).toHaveFocus()
    // })
})