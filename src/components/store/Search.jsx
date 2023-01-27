import { useState } from 'react';
import { HiSearchCircle } from 'react-icons/hi';
import fetchData, { createEndpoint, createQueryParams, createCompleteURL } from '../../utils/fetch';
import './Search.scss';

function Search() {

    const [inputVal, setInputVal] = useState('');

    const handleInput = function name(e) {
        const val = e.target.value;
        setInputVal(val);
        // console.log(inputVal);
    };

    const handleSubBtn = function handleSearchQueryValueOnClick() {
        const newEndPoint = createEndpoint('games');
        const newSearchParams = createQueryParams('search', inputVal);
        const newPageSIzeParams = createQueryParams('page_size', 10);
        const newGenreParams = createQueryParams('genre', 'indie');
        const newQueryParams = `${newSearchParams}&${newPageSIzeParams}&${newGenreParams}`;
        const newUrl = createCompleteURL(newEndPoint, newQueryParams);
        fetchData(newUrl);
    };

    return (
        <div className='search'>
            <input className="search-input" value={inputVal}
                onChange={handleInput}
            />
            <button type="button"
                className="search__input__sub-btn"
                onClick={handleSubBtn}
            >
                <HiSearchCircle className='search-icon hiro-icons' size={24} />
            </button>
        </div>
    );
}

export default Search;