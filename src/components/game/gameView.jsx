import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDatum } from '../../utils/fetch';
import SearchHeader from '../search/SearchHeader';
import './GameView.scss';

function GameView() {

    const { gameId } = useParams();

    const [game, setGame] = useState({});
    const [showFullDesc, setShowFullDesc] = useState('show');

    function cutWordCount(words, wordCount) {
        const newWords = words.slice(0, wordCount);
        return newWords;
    }

    const fetchGameData = async function sdfhfsdk() {
        const data = await fetchDatum(gameId);
        setGame({ ...data, short_description: cutWordCount(data?.description_raw, 100) });
    };

    useEffect(() => {
        fetchGameData();
    }, []);

    return (
        <>
            <SearchHeader />
            <div className='game-view'>
                <h1>{game?.name}</h1>
                <div className='game-view__info-container'>
                    <div>
                        <img src={game?.background_image}
                            className='game-view__img'
                            alt={`${game?.name} pic`} />
                    </div>
                    <div className='game-view__info'>
                        <img src={game?.background_image_additional}
                            className='game-view__img-2'
                            alt={`${game?.name} pic`} />

                        <p className='game-view__info__short-desc'
                            onMouseEnter={() => setShowFullDesc('show')}
                        > {game?.short_description}...</p>

                        <p className={`game-view__info__full-desc ${showFullDesc}`}
                            onMouseLeave={() => setShowFullDesc('hidden')}
                        > {game?.description_raw}</p>

                    </div>

                </div>
                {/* {gameId} */}
            </div>
        </>
    );
}

export default GameView;