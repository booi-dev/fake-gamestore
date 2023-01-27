import { PropTypes } from "prop-types";
import './SearchSuggestion.scss';

function SearchSuggestion(props) {
    const { game } = props;
    return (
        <div className='search-suggestion'>
            <img src={game.background_image} alt=""
                className="game-bg-img"
            />
            <button type="button"
                className="game-title"
            >
                {game.name}
            </button>
        </div>
    );
}

SearchSuggestion.propTypes = {
    game: PropTypes.instanceOf(Object).isRequired,
};

export default SearchSuggestion;