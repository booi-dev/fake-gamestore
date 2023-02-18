import React from 'react';
import PropTypes from 'prop-types';
import './GameCard.scss';

function GameCard({ game }) {
    return (
        <div className='game-card'>
            <img className='game-card__pic'
                src={game.background_image
                } alt={`${game.name} pic`} />
            <h1 className='game-card__title'> {game.name} </h1>
        </div>
    );
}

GameCard.propTypes = {
    game: PropTypes.instanceOf(Object).isRequired
};

export default GameCard;