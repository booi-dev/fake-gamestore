import React, { useState, useEffect } from 'react';
import useWinSize from '../../hooks/useWinSize';
import fetchData, { createQuery, createMultiQuery } from '../../utils/fetch';
import GameCard from './GameCard';
import './GameBrowse.scss';

function GameBrowse() {

    const winWidth = useWinSize();

    const [gameData, setGameData] = useState();
    const [gameColumns, setGameColumns] = useState();

    // /*eslint-disable */

    const addGamesToSplittedArray = (dataArray, resultedDataArray) => {
        const newResultedDataArray = resultedDataArray.map((arr) => [...arr]);

        let i = 0;
        let j = 0;
        while (j < dataArray.length) {
            newResultedDataArray[i].push(dataArray[j]);
            i = (i + 1) % newResultedDataArray.length;
            j += 1;
        }
        return newResultedDataArray;
    };

    const splitDataArray = function splitDataArrayInColumns(dataArray, numberOfColumns = 1) {
        const resultedDataArray = Array.from({ length: numberOfColumns }, () => []);
        return addGamesToSplittedArray(dataArray, resultedDataArray);
    };

    const fetchGameData = async function fetchGameData() {
        const newDatesQuery = createQuery('dates', '2022-01-01,2023-02-16');
        const newOrderingQuery = createQuery('orderng', 'released');
        const newPageSizeQuery = createQuery('page_size', 24);

        const query = createMultiQuery([newDatesQuery, newOrderingQuery, newPageSizeQuery]);

        const data = await fetchData('games', query);
        if (data !== 'ERR_NETWORK') {
            setGameData(data);
        }
    };

    const getDynamicColumns = function getColumnsAccordingToWidth() {
        let columns;
        if (gameData) {
            if (winWidth > 1020) columns = splitDataArray(gameData, 4);
            else if (winWidth > 740) columns = splitDataArray(gameData, 3);
            else if (winWidth > 500) columns = splitDataArray(gameData.slice(0, 8), 2);
            else if (winWidth < 500) columns = splitDataArray(gameData.slice(0, 4), 1);
        }
        setGameColumns(columns);
        // console.log(gameColumns);
    };

    useEffect(() => {
        fetchGameData();
    }, []);

    useEffect(() => {
        getDynamicColumns();
    }, [gameData, winWidth]);

    // console.log(gameColumns);

    const ColumnsComponent = gameColumns
        ?.map((columnOfGames, index) => <div key={index} className='browse-games__column'>
            {columnOfGames.map((game) => <div key={game.id}>
                <GameCard game={game} />
            </div>)}
        </div>
        );

    return (
        <div className='browse-games' id='browse-game'>
            {/* <h1 className='browse-games__title App-group-title'>BROWSE LATEST GAMES</h1> */}
            <div className='browse-games__columns-container'>
                {ColumnsComponent}
            </div>

        </div>
    );
}

export default GameBrowse;