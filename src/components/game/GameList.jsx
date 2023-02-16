import { useState } from 'react';
import { useAccount } from '../../context/useAccount';
import GameTitle from './GameTitle';
import './GameList.scss';

function GameList() {
    const { games } = useAccount();
    const [gamesInAccount] = useState(games.myGames);
    // const [isActive] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    console.log(gamesInAccount);

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
                <div className='gamelist__active-img-container'>
                    {gamesInAccount?.map((item, index) => <img key={item.id}
                        className={`gamelist__active-img ${activeIndex === index ? 'active' : ''}`}
                        src={item?.background_image} alt="" />)}
                </div>
            </div>
        </div>
    );
}


export default GameList;