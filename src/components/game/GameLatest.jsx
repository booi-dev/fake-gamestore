import { useState, useEffect } from 'react';
import fetchData, { createQuery, createMultiQuery } from '../../utils/fetch';
import GameGallery from './GameGallery';

function GameBrowse() {

    const [gameData, setGameData] = useState();

    const fetchGameData = async function fetchGameData() {
        const newDatesQuery = createQuery('dates', '2022-01-01,2023-02-16');
        const newOrderingQuery = createQuery('ordring', '-released');
        const newPageSizeQuery = createQuery('page_size', 12);

        const query = createMultiQuery([newDatesQuery, newOrderingQuery, newPageSizeQuery]);

        const data = await fetchData('games', query);
        if (data !== 'ERR_NETWORK') {
            setGameData(data);
        }
    };

    useEffect(() => {
        fetchGameData();
    }, []);

    return (
        <GameGallery games={gameData} />
    );
}

export default GameBrowse;