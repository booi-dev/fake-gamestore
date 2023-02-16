import { useState } from 'react';
import { useAccount } from '../../context/useAccount';
import GameTitle from './GameTitle';
import './GameList.scss';

function GameList() {
    const { games } = useAccount();
    const latestGameIndex = games.myGames.length - 1;
    const [gamesInAccount] = useState(games.myGames);
    const [activeIndex, setActiveIndex] = useState(latestGameIndex);

    // console.log(gamesInAccount);

    return (
        <div className="gamelist app-container">
            <h1 className='app-title fs-xl mb-sm'>MY GAMES</h1>
            <div className='gamelist__list'>
                <div>
                    {gamesInAccount?.map((item, index) =>
                        <GameTitle key={item.id}
                            game={item}
                            isActive={activeIndex === index}
                            setActive={() => setActiveIndex(index)}
                        />
                    )}
                </div>
                <div className='gamelist__active-game-container'>
                    {gamesInAccount?.map((item, index) => <div key={item.id}
                        className={`gamelist__active-game ${activeIndex === index ? 'active' : ''}`}>
                        <img
                            className='gamelist__active-game__img'
                            src={item?.background_image} alt="" />

                        <div className='gamelist__active-game__more-info'>
                            <div>
                                {item?.genres.map((genre) => <span key={genre.id} className='ml-sm'>{genre.name}</span>
                                )}

                            </div>
                            <button type='button' className='gamelist__active-game__store-page'>go to store page</button>
                        </div>
                        <div className='gamelist__active-game__copyown'
                        >
                            <div>copy own</div>
                            <div className='copy-number'>{item?.quantity}</div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}


export default GameList;