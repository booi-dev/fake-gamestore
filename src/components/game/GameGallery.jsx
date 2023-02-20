import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';
import './GameGallery.scss';

function GameGallery({ gameColumns }) {

    const ColumnsComponent = gameColumns
        ?.map((columnOfGames, index) => <div key={index} className='browse-games__column'>
            {columnOfGames.map((game) => <div key={game.id}>
                <GameCard game={game} />
            </div>)}
        </div>
        );

    return (
        <div className='browse-games' id='browse-game'>
            <div className='browse-games__columns-container'>
                {ColumnsComponent}
            </div>

        </div>
    );
}

GameGallery.propTypes = {
    gameColumns: PropTypes.instanceOf(Array)
};

GameGallery.defaultProps = {
    gameColumns: []
};

export default GameGallery;