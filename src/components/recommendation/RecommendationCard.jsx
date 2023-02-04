import { PropTypes } from "prop-types";
import './RecommendationCard.scss';

function RecommendationCard(props) {
    const { game } = props;

    return (
        <>
            <img src={game?.background_image} alt={`${game?.name} bg img`}
                className="recommendation-card_bg-img"
            />
            <div className="recommendation-card_game-details">
                <h2 className="rg-game-title">{game?.name} </h2>
                <div className="rg-sreenshots-container">
                    {game?.short_screenshots.slice(0, 4).map(sss => <img src={sss.image} alt={`${game?.name} screenshot`} key={sss.id} className="rg-screenshots" />)}
                </div>
                <div>
                    {game?.genres.slice(0, 4).map(genre => <span key={genre.id}
                        className="rg-genres"
                    >{genre.name}</span>)}
                </div>
                <div> $ {game?.price} </div>
                <h3 className="rg-released-date">released on: {game?.released} </h3>
            </div>

        </>
    );
}



RecommendationCard.propTypes = {
    game: PropTypes.instanceOf(Object),
};

RecommendationCard.defaultProps = {
    game: {},
};

export default RecommendationCard;