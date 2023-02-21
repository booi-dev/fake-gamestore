import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';
import useWinSize from '../../hooks/useWinSize';
import useDynamicColumns from '../../hooks/useDynamicColumns';

import './GameGallery.scss';

function GameGallery({ games }) {

    const winWidth = useWinSize();
    const getDynamicColumns = useDynamicColumns();

    const [gameColumns, setGameColumns] = useState();

    useEffect(() => {
        setGameColumns(getDynamicColumns(games));
    }, [winWidth]);


    const ColumnsComponent = gameColumns
        ?.map((columnOfGames, index) => <div key={index} className='gallery__column'>
            {columnOfGames.map((game) => <div key={game.id}>
                <GameCard game={game} />
            </div>)}
        </div>
        );

    return (
        <div className='gallery' id='browse-game'>
            <div className='gallery__columns-container'>
                {ColumnsComponent}
            </div>

        </div>
    );
}

GameGallery.propTypes = {
    games: PropTypes.instanceOf(Array)
};

GameGallery.defaultProps = {
    games: []
};

export default GameGallery;