import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';
import useWinSize from '../../hooks/useWinSize';
import useDynamicColumns from '../../hooks/useDynamicColumns';
import Loading from '../animation/Loading';

import './GameGallery.scss';

function GameGallery({ games }) {

    // console.log("gallery", games);

    const winWidth = useWinSize();
    const getDynamicColumns = useDynamicColumns();

    const [gameColumns, setGameColumns] = useState();
    const [isLoading, setiIsLoading] = useState(true);

    useEffect(() => {
        setGameColumns(getDynamicColumns(games));
        setTimeout(() => {
            setiIsLoading(false);
        }, 1000);
    }, [winWidth, games]);

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
                {isLoading && <Loading />}
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