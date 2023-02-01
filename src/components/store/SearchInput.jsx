import { HiSearchCircle } from 'react-icons/hi';

function SearchInput(props) {

    const { value, handleInput, handleInputOnFocus, handleInputOnBlur, fetchDataOnChange } = props;

    return (
        <div className='search-container' tabIndex='0' role='search'>
            <input className="search-input"
                type='text'
                placeholder='search games'
                value={value}
                onChange={handleInput}
                onFocus={handleInputOnFocus}
                onBlur={handleInputOnBlur}
            />
            <button type="button"
                className="search__input__sub-btn"
                onClick={fetchDataOnChange}
            >
                <HiSearchCircle className='search-icon' size={24} />
            </button>
        </div>
    );
}

export default SearchInput;