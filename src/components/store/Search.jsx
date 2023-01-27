import { useState } from 'react';
import { HiSearchCircle } from 'react-icons/hi';
import fetchData, { createEndpoint, createQueryParams, createCompleteURL } from '../../utils/fetch';
import SearchSuggestion from './SearchSuggestion';
import './Search.scss';

function Search() {

    const [inputVal, setInputVal] = useState('');
    const [suggestionClass, setSuggestionClass] = useState('');

    const [gameData, setGameData] = useState([]);

    const handleSubBtn = async function handleSearchQueryValueOnClick() {
        const newEndPoint = createEndpoint('games');
        const newSearchParams = createQueryParams('search', inputVal);
        const newPageSIzeParams = createQueryParams('page_size', 5);
        const newGenreParams = createQueryParams('genre', 'indie');
        const newQueryParams = `${newSearchParams}&${newPageSIzeParams}&${newGenreParams}`;
        const newUrl = createCompleteURL(newEndPoint, newQueryParams);
        const data = await fetchData(newUrl);
        setGameData(data);
    };

    const handleInput = function updateFieldValNfetchData(e) {
        const val = e.target.value;
        setInputVal(val);
        handleSubBtn();
    };

    const handleInputOnFocus = function addVisibilityOnFocus() {
        setSuggestionClass('show');
    };

    const handleInputOnBlur = function addVisibilityOnFocus() {
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