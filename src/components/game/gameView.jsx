import React from 'react';
import fetchData, { createEndpoint } from '../../utils/fetch';

function GameView(gameId) {

    const newEndpoint = createEndpoint(`games${gameId}`);

    return (
        <div>{newEndpoint}</div>
    );
}

export default GameView;