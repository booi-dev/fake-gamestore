import { useState, useCallback } from 'react';
import fetchData, { createQuery, createMultiQuery } from '../../utils/fetch';
import SearchInput from './SearchInput';
import SearchSuggestion from './SearchSuggestion';
import './Search.scss';

function Search() {

    const [inputVal, setInputVal] = useState('');
    const [suggestionClass, setSuggestionClass] = useState('');

    const [gameData, setGameData] = useState([]);

    const checkError = function checkIfApiCallIsError(response) {
        return response === 'ERR_NETWORK';
    };

    const fetchDataOnChange = useCallback(async () => {
        const newSearchQuery = createQuery('search', inputVal);
        const newPageSizeQuery = createQuery('page_size', 5);
        const newQuery = createMultiQuery([newSearchQuery, newPageSizeQuery]);
        const data = await fetchData('games', newQuery);
        /* eslint-disable-next-line */
        checkError(data) || setGameData(data);
    }, [gameData]);

    const handleInput = useCallback((e) => {
        const val = e.target.value;
        setInputVal(val);
        fetchDataOnChange();
    }, [gameData]);


    const handleInputOnFocus = useCallback(() => {
        setSuggestionClass('show');
    });

    const handleInputOnBlur = useCallback(() => {
        setSuggestionClass('hidden');
    });

    return (
        <div className='search'>
            <SearchInput
                value={inputVal}
                handleInput={handleInput}
                handleInputOnFocus={handleInputOnFocus}
                handleInputOnBlur={handleInputOnBlur}
                fetchDataOnChange={fetchDataOnChange}
            />

            {gameData.length > 0 &&
                <div className={`search__suggestion ${suggestionClass}`} data-testid='search-suggestion'>
                    {gameData.map((game) => <SearchSuggestion
                        key={game.id}
                        game={game} />)}
                </div>
            }
        </div>
    );
}

export default Search;