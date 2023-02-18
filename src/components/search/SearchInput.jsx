import { HiSearchCircle } from 'react-icons/hi';
import { PropTypes } from "prop-types";

function SearchInput(props) {

    const { value, handleInput, handleInputOnFocus, fetchDataOnChange } = props;

    return (
        <div className='search-container' tabIndex='0' role='search'>
            <input className="search-input"
                type='text'
                placeholder='search games'
                value={value}
                onChange={handleInput}
                onFocus={() => handleInputOnFocus('focus')}
            // onBlur={() => handleInputOnFocus('blur')}
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

SearchInput.propTypes = {
    value: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
    handleInputOnFocus: PropTypes.func.isRequired,
    fetchDataOnChange: PropTypes.func.isRequired,
};

export default SearchInput;