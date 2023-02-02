import { PropTypes } from "prop-types";
import './RecommendationCard.scss';

function RecommendationCard(props) {
    const { game } = props;
    return (
        <div className="recommendation-card" >
            <img src={game.background_image} alt={`${game.name} bg img`}
                className="recommendation-card_bg-img"
            />
            <h2>{game.name} </h2>
        </div>
    );
}

RecommendationCard.propTypes = {
    game: PropTypes.instanceOf(Object).isRequired,
};

export default RecommendationCard;