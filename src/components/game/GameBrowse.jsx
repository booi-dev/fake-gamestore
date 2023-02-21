import { useState, useEffect, useMemo } from 'react';
import fetchData, { createQuery, createMultiQuery } from '../../utils/fetch';
import GameGallery from './GameGallery';

function GameBrowse() {

    const [gameData, setGameData] = useState([]);

    const randomGenre = ['action', 'adventure', 'indie', 'platformer', 'casual', 'fighting', 'arcade', 'strategy', 'shooter', 'simulation', 'sports', 'puzzle'];

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

    const randomNumber = useMemo(() => Math.floor(Math.random() * 12) + 1);

    useEffect(() => {
        const genre = (randomGenre[randomNumber]);
        console.log(genre);
        fetchGameData('action');
    }, []);

    return (
        <>
            <h1 className='app-group-title fs-lg ml-sm mt-sm'> BROWSE GAMES</h1>
            <GameGallery games={gameData} />
        </>
    );
}

export default GameBrowse;