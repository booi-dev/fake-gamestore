import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { useAccount } from '../../context/useAccount';
import GameTitle from './GameTitle';
import './GameList.scss';

function GameList() {

    // const navigate = Navigate();

    const { games } = useAccount();
    const latestGameIndex = games.myGames.length - 1;
    const [gamesInAccount] = useState(games.myGames);
    const [activeIndex, setActiveIndex] = useState(latestGameIndex);

    // console.log(gamesInAccount);

    return (
        <div className="gamelist">
            <div className='gamelist__container'>
                <div className='gamelist__list'>
                    <h1 className='gamelist__title'>MY GAMES</h1>
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
                            <div className='gamelist__active-game__copyown'>
                                <div className='app-letter-spacing-2'>copy owned</div>
                                <div className='copy-number'>{item?.quantity}</div>
                            </div>
                            <div>
                                {item?.genres.map((genre) => <span key={genre.id} className='gamelist__active-game__genres app-letter-spacing-4'>{genre.name}</span>
                                )}
                            </div>
                            <Link to={`/game/${item?.id}`} className="app-flex-center">
                                <button type='button' className='gamelist__active-game__store-page'
                                >go to store page</button>
                                <HiChevronDoubleRight size={12} className='app-clr-4' />
                            </Link>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}


export default GameList;