import { useState, useEffect } from 'react';
import { subYears, format } from 'date-fns';
import fetchData, { createQuery, createMultiQuery } from '../../utils/fetch';
import GameGallery from './GameGallery';

const currentDate = new Date();
const formatedCurrentDate = format(currentDate, 'yyyy-MM-dd');
const dateOneYearAgo = subYears(currentDate, 1);
const formatedDateOneYearAgo = format(dateOneYearAgo, 'yyyy-MM-dd');

const latestYearRange = `${formatedDateOneYearAgo},${formatedCurrentDate}`;

function GameBrowse() {

    const [gameData, setGameData] = useState();

    const fetchGameData = async function fetchGameData() {
        const newDatesQuery = createQuery('dates', latestYearRange);
        const newOrderingQuery = createQuery('ordering', '-rating');
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