import { PropTypes } from "prop-types";
import './RecommendationCard.scss';

function RecommendationCard(props) {
    const { game } = props;
    return (
        <div className="recommendation-card" >
            <h1>{game.name} </h1>
        </div>
    );
}

RecommendationCard.propTypes = {
    game: PropTypes.instanceOf(Object).isRequired,
};

export default RecommendationCard;