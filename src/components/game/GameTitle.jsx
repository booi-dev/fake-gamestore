import PropTypes from 'prop-types';
import { BsController } from 'react-icons/bs';
import './GameTitle.scss';

function GameTitle(props) {

    const { game, isActive, setActive } = props;

    const selectGameToView = () => {
        setActive();
    };

    return (
        <div className='gametitle__container'>
            <div className={`gametitle__list ${isActive ? 'active' : ''}`} >
                <BsController className='game-controller-icon' size={25} />
                <div onClick={selectGameToView}
                    role='button'
                    tabIndex={0}>
                    {game.name}</div>
            </div>
            {/* <div className='gametitle__active-img-container'>
                <img className={`gametitle__active-img ${isActive ? 'active' : ''}`}
                    src={game?.background_image} alt="" />
            </div> */}
        </div>
    );
}

GameTitle.propTypes = {
    game: PropTypes.instanceOf(Object).isRequired,
    isActive: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
};

export default GameTitle;