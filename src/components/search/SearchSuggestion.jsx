import { PropTypes } from "prop-types";
import { Link } from 'react-router-dom';
import './SearchSuggestion.scss';


function SearchSuggestion(props) {

    const { game } = props;
    return (
        <Link to={`/game/${game?.id}`}>
            <div className='search-suggestion'>
                <img src={game.background_image} alt=""
                    className="game-bg-img"
                />
                <h1 className="game-title">
                    {game.name}
                </h1>
            </div>
        </Link>
    );
}

SearchSuggestion.propTypes = {
    game: PropTypes.instanceOf(Object).isRequired,
};

export default SearchSuggestion;