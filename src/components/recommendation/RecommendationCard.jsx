import { Link } from 'react-router-dom';
import { PropTypes } from "prop-types";
import './RecommendationCard.scss';

function RecommendationCard(props) {
    const { game } = props;

    return (
        <>
            <div className='recommendation-card_bg-img'>
                <Link to={`/game/${game?.id}`}>
                    <img src={game?.background_image} alt={`${game?.name} bg img`}
                    />
                </Link>
            </div>
            <div className="recommendation-card_game-details">
                <Link to={`/game/${game?.id}`}>
                    <h2 className="rg-game-title">{game?.name} </h2>
                </Link>
                <div className="rg-sreenshots-container">
                    {game?.short_screenshots.slice(0, 4).map(sss => <img src={sss.image} alt={`${game?.name} screenshot`} key={sss.id} className="rg-screenshots" />)}
                </div>
                <div>
                    {game?.genres.slice(0, 4).map(genre => <span key={genre.id}
                        className="rg-genres"
                    >{genre.name}</span>)}
                </div>
                <div> $ {game?.price} </div>
                <h3 className="rg-released-date">Released: {game?.released} </h3>
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