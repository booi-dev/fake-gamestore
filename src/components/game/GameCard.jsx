import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HiPlus, HiChevronDown } from "react-icons/hi2";
import { BsBookmarkStar } from 'react-icons/bs';
import { HiShoppingCart } from 'react-icons/hi';
import './GameCard.scss';

function GameCard({ game }) {

    const [isHoverAddBtn, setIsHoverAddBtn] = useState(false);
    const [isHoverGameCard, setIsHoverGameCard] = useState(false);

    const onClickAddBtn = () => {
        setIsHoverAddBtn(!isHoverAddBtn);
    };

    // console.log(game);
    return (
        <div className='game-card'
            onMouseEnter={() => setIsHoverGameCard(true)}
            onMouseLeave={() => setIsHoverGameCard(false)}
        >
            <img className='game-card__pic'
                src={game.background_image
                } alt={`${game.name} pic`} />
            <div className='game-card__info'>
                <h1 className='game-card__title'> {game.name} </h1>
                <div className='app-flex-wrap gap-4'>
                    {game?.genres.map((genre) => <h2 key={genre.id}
                        className='game-card__genres'>
                        {genre.name} </h2>)}
                </div>
            </div>
            {
                isHoverGameCard && <>
                    <button type='button'
                        onClick={onClickAddBtn}
                        className='game-card__add'>
                        {isHoverAddBtn ? <HiChevronDown size={10} /> : <HiPlus size={10} />}
                    </button>
                    <div className={`game-card__add-options ${isHoverAddBtn && 'show'}`}>
                        <button type='button'> + cart <HiShoppingCart /></button>
                        <button type='button'> + wishlist <BsBookmarkStar /></button>
                    </div>
                </>
            }

            <h3 className='game-card__price'>$ {game?.price}</h3>
            {
                isHoverGameCard && <Link to={`/game/${game?.id}`} >
                    <button type='button'
                        className='game-card__game-store-link'
                    >game store page</button>
                </Link>
            }

        </div>
    );
}

GameCard.propTypes = {
    game: PropTypes.instanceOf(Object).isRequired
};

export default GameCard;