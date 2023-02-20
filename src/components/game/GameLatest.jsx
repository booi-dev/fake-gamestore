import { useState, useEffect } from 'react';
import useWinSize from '../../hooks/useWinSize';
import fetchData, { createQuery, createMultiQuery } from '../../utils/fetch';
// import splitDataArray from '../../utils/splitDataArray';
// import withDynamicColumns from '../../hoc/withDynamicColumns';
import useDynamicColumns from '../../hooks/useDynamicColumns';

import GameGallery from './GameGallery';

function GameBrowse() {

    const winWidth = useWinSize();
    const getDynamicColumns = useDynamicColumns();

    const [gameData, setGameData] = useState();
    const [gameColumns, setGameColumns] = useState();

    // /*eslint-disable */

    const fetchGameData = async function fetchGameData() {
        const newDatesQuery = createQuery('dates', '2022-01-01,2023-02-16');
        const newOrderingQuery = createQuery('orderng', 'released');
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

    useEffect(() => {
        if (gameData) setGameColumns(getDynamicColumns(gameData));
    }, [gameData, winWidth]);

    return (
        <GameGallery gameColumns={gameColumns} />
    );
}

export default GameBrowse;