/* eslint-disable */
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from "../Search";
import SearchInput from "../SearchInput";
import SearchSuggestion from '../SearchSuggestion';
import fetchData from '../../../utils/fetch';

describe('testing search component', () => {

    test('render search component', () => {
        render(<MemoryRouter><Search /></MemoryRouter>);

        const searchInputEl = screen.getByRole('textbox')
        expect(searchInputEl).toBeInTheDocument()

        const searchButtonEl = screen.getByRole('button')
        expect(searchButtonEl).toBeInTheDocument()
    })

    test('update the input field value when user types', async () => {
        render(<MemoryRouter><Search /></MemoryRouter>);
        const inputField = screen.getByRole('textbox')
        const user = userEvent.setup()
        await user.type(inputField, 'hello');
        expect(inputField.value).toBe('hello');
    })

    const game = {
        background_image: 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'testing'
    }

    test('render search suggestions', () => {
        render(<MemoryRouter> <SearchSuggestion game={game} /> </MemoryRouter>);
        const gameBgImg = screen.getByRole('img')
        expect(gameBgImg).toBeInTheDocument();

        const gameName = screen.getByRole('heading')
        expect(gameName).toBeInTheDocument();
    })

    test('render suggestion when typing to input field', async () => {

        render(<MemoryRouter><Search /></MemoryRouter>);

        const input = screen.getByRole('textbox');
        await userEvent.type(input, 'Anything');

        await new Promise(resolve => setTimeout(resolve, 1000));

        const suggestions = screen.getByTestId('search-suggestion')
        expect(suggestions).toBeInTheDocument();
    })

    test('handleInput is called when typing in the input field', async () => {
        const handleInput = vi.fn();
        const handleInputOnFocus = vi.fn();
        render(<SearchInput handleInput={handleInput} handleInputOnFocus={handleInputOnFocus} />);

        const inputField = screen.getByRole('textbox');
        await userEvent.type(inputField, 'Anything');

        expect(handleInput).toHaveBeenCalled()
        expect(handleInputOnFocus).toHaveBeenCalled()
    })

    test('renders the game title', () => {
        const game = {
            id: 1,
            name: 'Game Name',
            background_image: 'game-image.jpg'
        };

        render(<MemoryRouter> <SearchSuggestion game={game} /> </MemoryRouter>);

        const gameTitle = screen.getByRole('heading')
        expect(gameTitle).toHaveTextContent("Game Name");
    });

})