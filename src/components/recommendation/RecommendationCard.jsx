import { Link } from 'react-router-dom';
import { PropTypes } from "prop-types";
import './RecommendationCard.scss';

function RecommendationCard(props) {
    const { game, startTimer, stopTimer } = props;

    return (
        <div className='recommendation-card'>
            <div className='recommendation-card__bg-img'
                onMouseEnter={() => stopTimer()}
                onMouseLeave={() => startTimer()}
            >
                <img src={game?.background_image} alt={`${game?.name} bg img`}
                />
            </div>
            <div className="recommendation-card__game-details">
                <Link to={`/game/${game?.id}`}>
                    <h2 className="rg__game-title">{game?.name} </h2>
                </Link>
                <div className="rg__sreenshots-container">
                    {game?.short_screenshots?.slice(0, 4).map(sss => <img src={sss.image} alt={`${game?.name} screenshot`} key={sss.id} className="rg__screenshots" />)}
                </div>
                <div>
                    {game?.genres.slice(0, 4).map(genre => <span key={genre.id}
                        className="rg__genres"
                    >{genre.name}</span>)}
                </div>
                <div> $ {game?.price} </div>
                <h3 className="rg__released-date">Released Date: {game?.formattedReleasedDate} </h3>

                <Link to={`/game/${game?.id}`}>
                    <button type='button'
                        className='rg__store-page-link-btn'
                    >Go to store page</button>
                </Link>
            </div>
        </div>
    );
}


RecommendationCard.propTypes = {
    game: PropTypes.instanceOf(Object),
    startTimer: PropTypes.func.isRequired,
    stopTimer: PropTypes.func.isRequired,
};

RecommendationCard.defaultProps = {
    game: {},
};

export default RecommendationCard;