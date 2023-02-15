import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IoGameController } from 'react-icons/io5';
import { useAccount } from '../context/useAccount';
import './MyGames.scss';


function GameName(props) {

    const { item, index } = props;
    const [isActive, setIsActive] = useState(false);

    const selectGameToView = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        if (index === 0) {
            // console.log(index, "0");
            setIsActive(true);
        } else if (index !== 0) {
            // console.log(index, "1");
            setIsActive(false);
        }
    }, [index]);

    return (
        <div className={`my-games__gamelist-item ${isActive ? 'active' : ''}`} >
            <IoGameController />
            <div onClick={selectGameToView}
                role='button'
                tabIndex={0}>
                {item.game}</div>
        </div>
    );
}

function MyGames() {
    const { games } = useAccount();
    const [gamesInAccount] = useState(games.myGames);
    // console.log(gamesInAccount);

    return (
        <div className="my-games app-container">
            <h1 className='app-title fs-xl mb-sm'>MY GAMES</h1>
            <div className='my-games__container'>
                <div className='my-games__gamelist'>
                    {gamesInAccount?.map((item, index) =>

                        <GameName key={item.id}
                            item={item}
                            index={index}
                        // activeClass={activeClass}
                        // setActiveClass={setActiveClass}
                        />
                    )}
                </div>
                <div>
                    <img className='my-games__current-img'
                        src={gamesInAccount[0]?.background_image} alt="" />
                </div>
            </div>
        </div>
    );
}

GameName.propTypes = {
    item: PropTypes.instanceOf(Object).isRequired,
    index: PropTypes.number.isRequired,
    // activeClass: PropTypes.string.isRequired,
    // setActiveClass: PropTypes.func.isRequired,
};

export default MyGames;