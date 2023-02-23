import { useState, useEffect, useCallback } from 'react';
import fetchData, { createQuery, createMultiQuery } from '../../utils/fetch';
import GameGallery from './GameGallery';
import ScrollerY from '../ui/ScrollerY';
import './GameBrowse.scss';

function GameBrowse() {

    const [gameData, setGameData] = useState([]);
    const [currentGenre, setcurrentGenre] = useState('action');

    const genres = ['action', 'adventure', 'indie', 'platformer', 'casual', 'fighting', 'arcade', 'strategy', 'shooter', 'simulation', 'sports', 'puzzle'];

    const fetchGameData = async function fetchGameDataFromServer(genre) {

        const newGenresQuery = createQuery('genres', genre);
        const newOrderingQuery = createQuery('ordering', '-rating, -released');
        const newPageSizeQuery = createQuery('page_size', 12);

        const query = createMultiQuery([newGenresQuery, newOrderingQuery, newPageSizeQuery]);

        const data = await fetchData('games', query);
        if (data !== 'ERR_NETWORK') {
            setGameData(data);
        }
    };

    const selectGenre = useCallback((genre) => {
        setcurrentGenre(genre);
    }, []);

    useEffect(() => {
        fetchGameData(currentGenre);
    }, [currentGenre]);

    return (
        <div className='game-browse'>
            <div className='game-browse__header'>
                <h1 className='game-browse__title'> BROWSE GAMES</h1>
                <ScrollerY handler={selectGenre} genres={genres} />
            </div>
            <GameGallery games={gameData} />
        </div>
    );
}

export default GameBrowse;