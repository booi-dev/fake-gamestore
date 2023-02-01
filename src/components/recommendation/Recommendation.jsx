import { useState, useEffect } from 'react';
import fetchData, { createQuery } from '../../utils/fetch';
import RecommendationCard from './RecommendationCard';

function Recommendation() {

    const [recommendedGame, setRecommendedGame] = useState([3328, 5679]);
    const [currentGame, setCurrentGame] = useState({});

    const fetchGameData = async function dfdsf() {
        const newPageSizeQuery = createQuery('page_size', 10);
        const gameData = await fetchData('games', newPageSizeQuery);
        setRecommendedGame(gameData);
        setCurrentGame(recommendedGame[4]);
        console.log(currentGame);
        console.log(" di ");
    };

    useEffect(() => {
        fetchGameData();
        setCurrentGame(recommendedGame[4]);
        // console.log(" i dnt care");
        // console.log(recommendedGame[4]);
        // console.log(currentGame);
    }, []);

    return (
        <div className='recommendation'>

            <button type='button'>Prev</button>

            <button type='button'>Next</button>

            {/* <RecommendationCard
                key={currentGame.id}
                game={currentGame}
            /> */}

            {/* {recommendedGame.map((game) => <RecommendationCard
                key={game.id}
                game={game}
            />)} */}

        </div>
    );
}

export default Recommendation;