import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDatum, createEndpoint } from '../../utils/fetch';

function GameView() {

    const { gameId } = useParams();

    const [game, setGame] = useState({});

    const fetchGameData = async function sdfhfsdk() {
        const data = await fetchDatum(gameId);
        setGame(data);
    };

    useEffect(() => {
        fetchGameData();
    }, []);

    return (
        <div> King {gameId}</div>
    );
}

export default GameView;