import { useState, useEffect } from 'react';
import useWinSize from '../hooks/useWinSize';
import splitDataArray from '../utils/splitDataArray';

/* esint-disable */

const withDynamicColumns = (WrappedComponent, initialGames) => {
    function WithDynamicColumns(props) {
        const winWidth = useWinSize();
        const [gameColumns, setGameColumns] = useState([]);

        const getDynamicColumns = function getColumnsAccordingToWidth(games) {
            let columns;
            if (winWidth > 1020) columns = splitDataArray(games, 4);
            else if (winWidth > 740) columns = splitDataArray(games, 3);
            else if (winWidth > 500) columns = splitDataArray(games.slice(0, 8), 2);
            else if (winWidth < 500) columns = splitDataArray(games.slice(0, 4), 1);

            return columns;
        };

        useEffect(() => {
            if (initialGames) setGameColumns(getDynamicColumns(initialGames));
        }, [initialGames, winWidth]);

        return <WrappedComponent {...props} gameColumns={gameColumns} />;
    }
    return WithDynamicColumns;
};

export default withDynamicColumns;