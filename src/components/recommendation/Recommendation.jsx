import { useState, useEffect } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import fetchData, { createQuery } from '../../utils/fetch';
import RecommendationCard from './RecommendationCard';
import './Recommendation.scss';

function Recommendation() {

    const [gameData, setGameData] = useState();
    const [gameSerial, setGameSerial] = useState(0);

    const fetchGameData = async function fetchGameDataFromApi() {
        const newPageSizeQuery = createQuery('page_size', 10);
        const data = await fetchData('games', newPageSizeQuery);
        setGameData(data);
        setGameSerial(Math.floor(data.length / 2));

        // setCurrentGame(data[Math.floor(data.length / 2)]);
    };

    const nextCurrentGame = function nextCurrentGame() {
        const totalGames = gameData.length;
        if (gameSerial === totalGames - 1) setGameSerial(0);
        else { setGameSerial(gameSerial + 1); }
    };

    const prevCurrentGame = function prevCurrentGame() {
        if (gameSerial === 0) setGameSerial(9);
        else { setGameSerial(gameSerial - 1); }
    };

    useEffect(() => {
        fetchGameData();
        console.log(gameData);
    }, []);

    return (
        <>
            <div className='recommendation-title'>
                <h1 className="recommendation-title">FEATURED & RECOMMENDED</h1>
            </div>
            <div className='recommendation-container'>
                <button type='button'
                    className='prev-btn'
                    onClick={prevCurrentGame}
                >
                    <HiOutlineChevronLeft size={50} className="prev-icon" />
                </button>
                {gameData && <RecommendationCard
                    key={gameData[gameSerial].id}
                    game={gameData[gameSerial]}
                />
                }
                <button type='button'
                    className='next-btn'
                    onClick={nextCurrentGame}
                >
                    <HiOutlineChevronRight size={50} className="next-icon" />
                </button>
            </div>

        </>
    );
}

export default Recommendation;