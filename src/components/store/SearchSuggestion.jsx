import { PropTypes } from "prop-types";
import './SearchSuggestion.scss';

function SearchSuggestion(props) {
    const { game } = props;
    console.log(game);
    return (
        <div className='search-suggestion'>{game.name} ddg</div>
    );
}

SearchSuggestion.propTypes = {
    game: PropTypes.instanceOf(Object).isRequired,
};

export default SearchSuggestion;