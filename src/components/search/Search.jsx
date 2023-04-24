import { useState, useCallback } from 'react';
import { HiChevronDown } from 'react-icons/hi';

import { createQuery, createMultiQuery, debouncedFetchData } from '../../utils/fetch';
import SearchInput from './SearchInput';
import SearchSuggestion from './SearchSuggestion';
import BackDrop from '../ui/BackDrop';
import './Search.scss';

function Search() {

    const [inputVal, setInputVal] = useState('');
    const [isSuggestions, setIsSuggestions] = useState(false);

    const [gameData, setGameData] = useState([]);

    const checkError = function checkIfApiCallIsError(response) {
        return response === 'ERR_NETWORK';
    };

    const fetchDataOnChange = useCallback(async (val) => {
        const newSearchQuery = createQuery('search', val);
        const newPageSizeQuery = createQuery('page_size', 5);
        const newQuery = createMultiQuery([newSearchQuery, newPageSizeQuery]);
        const data = await debouncedFetchData('games', newQuery);
        /* eslint-disable-next-line */
        checkError(data) || setGameData(data);
    }, [gameData]);

    const handleInput = useCallback((e) => {
        const val = e.target.value;
        setInputVal(val);
        fetchDataOnChange(val);
    }, [fetchDataOnChange]);

    const handleInputOnFocus = useCallback((state) => {
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

                {
                    (gameData.length > 0 && isSuggestions) &&
                    <div className='search__suggestion'
                        data-testid='search-suggestion'>
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
                isSuggestions && <BackDrop handler={setIsSuggestions} />
            }
        </>
    );
}

export default Search;