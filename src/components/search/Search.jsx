import { useState, useCallback } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import fetchData, { createQuery, createMultiQuery } from '../../utils/fetch';
import SearchInput from './SearchInput';
import SearchSuggestion from './SearchSuggestion';
import './Search.scss';

function Search() {

    const [inputVal, setInputVal] = useState('');
    const [isSuggestions, setIsSuggestions] = useState(false);

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

    const handleInputOnFocus = useCallback((state) => {
        // setSuggestionClass('show');
        if (state === 'focus') setIsSuggestions(true);
        else if (state === 'blur') setIsSuggestions(false);
    });

    const closeSuggestions = useCallback(() => {
        setIsSuggestions(false);
    });

    return (
        <>
            <div className={`search ${isSuggestions && 'darkened'}`}>
                <SearchInput
                    value={inputVal}
                    handleInput={handleInput}
                    handleInputOnFocus={handleInputOnFocus}
                    fetchDataOnChange={fetchDataOnChange}
                />

                {(gameData.length > 0 && isSuggestions) &&
                    <div className='search__suggestion'>
                        {gameData.map((game) => <SearchSuggestion
                            key={game.id}
                            game={game}
                            closeSuggestions={closeSuggestions} />)}
                        <button type='button'
                            className='search-suggestion__close-btn'
                            onClick={closeSuggestions}
                        >close <HiChevronDown className='dropdown-icon' />
                        </button>
                    </div>
                }

            </div>
            {
                /* eslint-disable */
                isSuggestions && <div className='search__backdrop'
                    aria-label='backdrop'
                    onClick={() => setIsSuggestions(false)}
                />}
        </>
    );
}

export default Search;