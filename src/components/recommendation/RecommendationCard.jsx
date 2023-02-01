import { PropTypes } from "prop-types";

function RecommendationCard(props) {
    const { game } = props;
    return (
        <div >
            <h1>{game.name} </h1>
        </div>
    );
}

RecommendationCard.propTypes = {
    game: PropTypes.instanceOf(Object).isRequired,
};

export default RecommendationCard;