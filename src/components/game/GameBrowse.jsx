import { useState, useEffect } from 'react';
import fetchData, { createQuery, createMultiQuery } from '../../utils/fetch';

function GameBrowse() {

    const [gameData, setGameData] = useState([]);

    const randomGenre = ['action', 'adventure', 'indie', 'platformer', 'casual', 'fighting', 'arcade', 'strategy', 'shooter', 'simulation', 'sports', 'puzzle'];

    const fetchGameData = async function fetchGameDataFromServer(genre) {

        const newGenresQuery = createQuery('genres', genre);
        const newOrderingQuery = createQuery('ordering', '-rating, -released');
        const newPageSizeQuery = createQuery('page_size', 20);

        const query = createMultiQuery([newGenresQuery, newOrderingQuery, newPageSizeQuery]);

        const data = await fetchData('games', query);
        if (data !== 'ERR_NETWORK') {
            setGameData(data);
        }
    };

    useEffect(() => {

        const randomNum = Math.floor(Math.random() * 12) + 1;
        fetchGameData(randomGenre[randomNum]);
    }, []);

    return (
        <div>
            {gameData.map((game) => <div key={game.key}>
                <h1> {game.name}</h1>
                <img src={game.background_image} alt="" style={{ width: '300px' }} />
            </div>)}
        </div>
    );
}

export default GameBrowse;