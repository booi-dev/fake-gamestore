import { useState } from 'react';
import { HiSearchCircle } from 'react-icons/hi';
import fetchData, { createQuery, createMultiQuery } from '../../utils/fetch';
import SearchSuggestion from './SearchSuggestion';
// import Backdrop from './Backdrop';
import './Search.scss';

function Search() {

    const [inputVal, setInputVal] = useState('');
    const [suggestionClass, setSuggestionClass] = useState('');

    const [gameData, setGameData] = useState([]);

    const checkError = function checkIfApiCallIsError(response) {
        return response === 'ERR_NETWORK';
    };

    const handleSubBtn = async function handleSearchQueryValueOnClick() {
        const newSearchQuery = createQuery('search', inputVal);
        const newPageSizeQuery = createQuery('page_size', 5);
        const newQuery = createMultiQuery([newSearchQuery, newPageSizeQuery]);
        const data = await fetchData('games', newQuery);
        /* eslint-disable-next-line */
        checkError(data) || setGameData(data);
    };

    const handleInput = function updateFieldValNfetchData(e) {
        const val = e.target.value;
        setInputVal(val);
        handleSubBtn();
    };

    const handleInputOnFocus = function addVisibilityOnFocus() {
        setSuggestionClass('show');
    };

    const handleInputOnBlur = function removeSuggestionsVisibility() {
        setSuggestionClass('hidden');
    };

    return (
        <div className='search'>
            <div className='search-container'>
                <input className="search-input" value={inputVal}
                    onChange={handleInput}
                    onFocus={handleInputOnFocus}
                    onBlur={handleInputOnBlur}
                />
                <button type="button"
                    className="search__input__sub-btn"
                    onClick={handleSubBtn}
                >
                    <HiSearchCircle className='search-icon' size={24} />
                </button>
            </div>

            {gameData.length > 0 &&
                <div className={`search__suggestion ${suggestionClass}`}>
                    {gameData.map((game) => <SearchSuggestion
                        key={game.id}
                        game={game} />)}
                </div>
            }
        </div>
    );
}

export default Search;