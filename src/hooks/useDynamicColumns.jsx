
// import { useState, useEffect } from 'react';
import useWinSize from './useWinSize';

function useDynamicColumns() {
    const winWidth = useWinSize();

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

    const getDynamicColumns = function getColumnsAccordingToWidth(gameDataArray) {
        let columns;
        if (winWidth > 1020) columns = splitDataArray(gameDataArray, 4);
        else if (winWidth > 740) columns = splitDataArray(gameDataArray, 3);
        else if (winWidth > 500) columns = splitDataArray(gameDataArray.slice(0, 12), 2);
        else if (winWidth < 500) columns = splitDataArray(gameDataArray.slice(0, 8), 1);

        return columns;
    };

    return getDynamicColumns;
}

export default useDynamicColumns;