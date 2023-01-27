import { useState } from 'react';
import { HiSearchCircle } from 'react-icons/hi';
import fetchData, { createEndpoint, createQueryParams, createCompleteURL } from '../../utils/fetch';
import SearchSuggestion from './SearchSuggestion';
import './Search.scss';

function Search() {

    const [inputVal, setInputVal] = useState('');

    const [gameData, setGameData] = useState([]);

    const handleSubBtn = async function handleSearchQueryValueOnClick() {
        const newEndPoint = createEndpoint('games');
        const newSearchParams = createQueryParams('search', inputVal);
        const newPageSIzeParams = createQueryParams('page_size', 5);
        const newGenreParams = createQueryParams('genre', 'indie');
        const newQueryParams = `${newSearchParams}&${newPageSIzeParams}&${newGenreParams}`;
        const newUrl = createCompleteURL(newEndPoint, newQueryParams);
        const data = await fetchData(newUrl);
        console.log("result", data);
        console.log("data", gameData);
        setGameData(data);
    };

    const handleInput = function name(e) {
        const val = e.target.value;
        setInputVal(val);
        handleSubBtn();
        // console.log(inputVal);
    };

    // const suggestions = gameData.lenght > 0 && gameData.map((game) => <SearchSuggestion
    //     key={game.id}
    //     game={game} />);

    return (
        <div className='search'>
            <div className='search-container'>
                <input className="search-input" value={inputVal}
                    onChange={handleInput}
                />
                <button type="button"
                    className="search__input__sub-btn"
                    onClick={handleSubBtn}
                >
                    <HiSearchCircle className='search-icon' size={24} />
                </button>
            </div>
            <div className='search__suggestion'>
                {gameData.length > 0 && gameData.map((game) => <SearchSuggestion
                    key={game.id}
                    game={game} />)}
            </div>
        </div>
    );
}

export default Search;