import { PropTypes } from "prop-types";
import { Link } from 'react-router-dom';
import './SearchSuggestion.scss';


function SearchSuggestion(props) {

    const { game, closeSuggestions } = props;
    return (
        <Link to={`/game/${game?.id}`}>
            <button type="button"
                className='search-suggestion'
                onClick={closeSuggestions}
            >
                <img src={game.background_image} alt=""
                    className="game-bg-img"
                />
                <h1 className="game-title">
                    {game.name}
                </h1>
            </button>
        </Link>
    );
}

SearchSuggestion.propTypes = {
    game: PropTypes.instanceOf(Object).isRequired,
    closeSuggestions: PropTypes.func.isRequired,
};

export default SearchSuggestion;