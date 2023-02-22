import { useState, useEffect, useCallback } from 'react';
import fetchData, { createQuery } from '../../utils/fetch';
import { Prev, Next } from '../ui/PrevNext';
import RecommendationCard from './RecommendationCard';
import CarouselThumbs from './CarouselThumbs';
import timer from '../../utils/timer';
import './Recommendation.scss';

function Recommendation() {

    const [gameData, setGameData] = useState();
    const [gameSerial, setGameSerial] = useState(0);
    const [gameTotal, setGameTotal] = useState(0);

    const fetchGameData = useCallback(async () => {
        const newPageSizeQuery = createQuery('page_size', 14);
        const data = await fetchData('games', newPageSizeQuery);
        if (data !== 'ERR_NETWORK') {
            setGameData(data);
            setGameSerial(Math.floor(data.length / 2));
            setGameTotal(data.length);
        }
    }, []);

    const nextCurrentGame = useCallback(() => {
        const totalGames = gameData?.length;
        if (gameSerial === totalGames - 1) setGameSerial(0);
        else { setGameSerial(gameSerial + 1); }
    }, [gameSerial]);

    const prevCurrentGame = useCallback(() => {
        const totalGames = gameData?.length;
        if (gameSerial === 0) setGameSerial(totalGames - 1);
        else { setGameSerial(gameSerial - 1); }
    }, [gameSerial]);

    const updateCurrentGame = useCallback((serial) => {
        setGameSerial(serial);
    }, []);

    const autoUpdateCurrentGame = function updateSelfCurrentGame() {
        setGameSerial(serial => {
            if (serial === gameTotal - 1) return serial - (gameTotal - 1);
            return serial + 1;
        });
    };

    const [startTimer, stopTimer] = timer(autoUpdateCurrentGame, 20);

    useEffect(() => {
        fetchGameData();
    }, []);

    useEffect(() => {
        if (gameTotal > 0) startTimer();
        return () => stopTimer();
    }, [gameTotal, gameSerial]);

    return (
        <div>
            <div className='recommendation' id='recommendation'>
                <div className="recommendation__card-container"
                >
                    {gameData && <RecommendationCard
                        key={gameData[gameSerial].id}
                        game={gameData[gameSerial]}
                        stopTimer={stopTimer}
                        startTimer={startTimer}
                    />}
                </div>
                <Prev prevHandler={prevCurrentGame} />

                <Next nextHandler={nextCurrentGame} />

            </div>
            <div className='recommendation__carousel-thumbs'>
                {gameData && gameData.map((game, index) => <CarouselThumbs
                    key={game.id}
                    serial={index}
                    activeSerial={gameSerial}
                    updateCurrentGame={updateCurrentGame}
                />)}
            </div>
        </div>
    );
}

export default Recommendation;