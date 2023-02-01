import { useState, useEffect } from 'react';
import fetchData from '../../utils/fetch';

function Recommendation() {

    const [recommendedGame, setRecommendedGame] = useState([3328, 5679]);

    useEffect(() => {
        const gameData = fetchData('games', "dead");
        setRecommendedGame(gameData);
    });

    return (
        <div>Recommendation</div>
    );
}

export default Recommendation;