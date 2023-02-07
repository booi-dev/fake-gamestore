import { useState, useEffect, useCallback } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import fetchData, { createQuery } from '../../utils/fetch';
import RecommendationCard from './RecommendationCard';
import CarouselThumbs from './CarouselThumbs';
import './Recommendation.scss';

function Recommendation() {

    const [gameData, setGameData] = useState();
    const [gameSerial, setGameSerial] = useState(0);
    const [gameTotal, setGameTotal] = useState(0);

    const fetchGameData = useCallback(async () => {
        const newPageSizeQuery = createQuery('page_size', 12);
        const data = await fetchData('games', newPageSizeQuery);
        if (data !== 'ERR_NETWORK') {
            setGameData(data);
            setGameSerial(Math.floor(data.length / 2));
            setGameTotal(data.length);
        }
    }, []);

    const nextCurrentGame = function nextCurrentGame() {
        const totalGames = gameData.length;
        if (gameSerial === totalGames - 1) setGameSerial(0);
        else { setGameSerial(gameSerial + 1); }
    };

    const prevCurrentGame = function prevCurrentGame() {
        const totalGames = gameData.length;
        if (gameSerial === 0) setGameSerial(totalGames - 1);
        else { setGameSerial(gameSerial - 1); }
    };

    const updateCurrentGame = useCallback((serial) => {
        setGameSerial(serial);
    }, []);

    const autoUpdateCurrentGame = function updateSelfCurrentGame() {
        setGameSerial(serial => {
            if (serial === gameTotal - 1) return serial - (gameTotal - 1);
            return serial + 1;
        });
    };

    useEffect(() => {
        fetchGameData();
    }, []);

    useEffect(() => {
        let intervalId;
        if (gameTotal > 0) {
            intervalId = setInterval(() => {
                autoUpdateCurrentGame();
            }, 10000);
        }
        return () => clearInterval(intervalId);
    }, [gameTotal, gameSerial]);

    return (
        <>
            <div className="recommendation_title">
                <h1>FEATURED & RECOMMENDED</h1>
            </div>
            <div className='recommendation_container'>
                <button type='button'
                    className='prev-btn'
                    onClick={prevCurrentGame}
                >
                    <HiOutlineChevronLeft className="prev-icon" />
                </button>
                <div className="recommendation_card-container" >
                    {gameData && <RecommendationCard
                        key={gameData[gameSerial].id}
                        game={gameData[gameSerial]}
                    />}
                </div>
                <button type='button'
                    className='next-btn'
                    onClick={nextCurrentGame}
                >
                    <HiOutlineChevronRight className="next-icon" />
                </button>
            </div>
            <div className='recommendation_carousel-thumbs'>
                {gameData && gameData.map((game, index) => <CarouselThumbs
                    key={game.id}
                    serial={index}
                    activeSerial={gameSerial}
                    updateCurrentGame={updateCurrentGame}
                />)}
            </div>
        </>
    );
}

export default Recommendation;