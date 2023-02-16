import PropTypes from 'prop-types';
import { BsController } from 'react-icons/bs';
import './GameTitle.scss';

function GameTitle(props) {

    const { game, isActive, setActive } = props;

    const selectGameToView = () => {
        setActive();
    };

    return (
        <div className={`gametitle__list ${isActive ? 'active' : ''}`} >
            <BsController className='game-controller-icon' size={25} />
            <div onClick={selectGameToView}
                role='button'
                tabIndex={0}>
                {game.name}</div>
        </div>
    );
}

GameTitle.propTypes = {
    game: PropTypes.instanceOf(Object).isRequired,
    isActive: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
};

export default GameTitle;