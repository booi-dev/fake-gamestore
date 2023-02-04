import React from 'react';
import { useParams } from 'react-router-dom';
// import fetchData, { createEndpoint } from '../../utils/fetch';

function GameView() {

    const { gameId } = useParams();

    // const newEndpoint = createEndpoint(`games${gameId}`);
    console.log(gameId);

    return (
        <div> King {gameId}</div>
    );
}

export default GameView;