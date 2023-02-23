import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsCartPlus, BsCartCheck } from 'react-icons/bs';
import { useWishCart, isInWishCart } from '../../context/useWishCart';
import { useAccount, isGameOwn } from '../../context/useAccount';

import './GameCard.scss';

function GameCard({ game }) {

    const { cart, cartDispatch } = useWishCart();
    const { games } = useAccount();

    const isGameInCart = isInWishCart(game?.id, cart?.items);
    const isGameInMyAccount = isGameOwn(game, games.myGames);

    const [isHoverGameCard, setIsHoverGameCard] = useState(false);

    // console.log(isGameInMyAccount);

    const gameDataToAdd = {
        ...game,
        quantity: 1
    };

    const addToCart = function addToCart() {
        console.log("cart");
        cartDispatch({ type: "add", payload: gameDataToAdd });
    };

    return (
        <div className='game-card'
            onMouseOver={() => setIsHoverGameCard(true)}
            onMouseOut={() => setIsHoverGameCard(false)}
            onFocus={() => setIsHoverGameCard(true)}
            onBlur={() => setIsHoverGameCard(false)}
            tabIndex='0'
        >
            <img className={`game-card__pic ${isHoverGameCard && 'card-hover'}`}
                src={game.background_image}
                alt={`${game.name} pic`}
            />

            <div className='game-card__info'>
                <h1 className={`game-card__title ${isHoverGameCard && 'card-hover'}`}> {game.name} </h1>
                {/* <div className='app-flex-wrap gap-4'>
                    {game?.genres.map((genre) => <h2 key={genre.id}
                        className='game-card__genres'>
                        {genre.name} </h2>)
                    }
                </div> */}
            </div>

            {isHoverGameCard
                && !isGameInCart
                && !isGameInMyAccount
                && <button type='button'
                    className='game-card__add-cart'
                    onClick={addToCart}
                > ADD TO CART <BsCartPlus size={16} />
                </button>
            }

            <Link to='/checkout'>
                <div className='game-card__is-in-cart'>
                    {isGameInCart
                        && <div className='app-flex-center gap-4'>
                            GAME IN CART
                            <BsCartCheck size={16} />
                        </div>
                    }
                </div>
            </Link>


            {
                isGameInMyAccount
                    ? <IoMdCheckmarkCircleOutline size={18} className='game-card__own-icon' />
                    : <h3 className='game-card__price'>$ {game?.price}</h3>
            }

            {
                isHoverGameCard && <Link to={`/game/${game?.id}`} >
                    <button type='button'
                        className='game-card__game-store-link'
                    > store page</button>
                </Link>
            }

        </div>
    );
}

GameCard.propTypes = {
    game: PropTypes.instanceOf(Object).isRequired
};

export default GameCard;