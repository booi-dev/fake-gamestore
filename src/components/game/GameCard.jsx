import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HiPlus, HiChevronDown } from "react-icons/hi2";
import { BsCartPlus, BsBookmarkPlus, BsCartCheck, BsBookmarkCheck } from 'react-icons/bs';
import { useWishCart, isInWishCart } from '../../context/useWishCart';

import './GameCard.scss';

function GameCard({ game }) {

    const { cart, cartDispatch, wishlist, wishDispatch } = useWishCart();

    const isGameInCart = isInWishCart(game?.id, cart?.items);
    const isGameInWishlist = isInWishCart(game?.id, wishlist?.items);

    const [isHoverGameCard, setIsHoverGameCard] = useState(false);
    const [isHoverAddBtn, setIsHoverAddBtn] = useState(true);

    const gameDataToAdd = {
        ...game,
        quantity: 1
    };

    const addToCart = function addToCart() {
        console.log("cart");
        cartDispatch({ type: "add", payload: gameDataToAdd });
    };

    const addToWishlist = function addToWishlist() {
        console.log("wish");
        wishDispatch({ type: "add", payload: gameDataToAdd });
    };

    useEffect(() => {
        // Update the state of isHoverAddBtn after isGameInWishlist and isGameInCart change
        if (!isGameInWishlist || !isGameInCart) {
            setIsHoverAddBtn(true);
        } else {
            setIsHoverAddBtn(false);
        }
    }, [isGameInWishlist, isGameInCart]);

    return (
        <div className='game-card'
            onMouseOver={() => setIsHoverGameCard(true)}
            onMouseOut={() => setIsHoverGameCard(false)}
            onFocus={() => setIsHoverGameCard(true)}
            onBlur={() => setIsHoverGameCard(false)}
            tabIndex='0'
        >
            <img className={`game-card__pic ${isHoverGameCard && 'card-hover'}`}
                src={game.background_image
                } alt={`${game.name} pic`} />

            <div className='game-card__info'>
                <h1 className={`game-card__title ${isHoverGameCard && 'card-hover'}`}> {game.name} </h1>
                <div className='app-flex-wrap gap-4'>
                    {game?.genres.map((genre) => <h2 key={genre.id}
                        className='game-card__genres'>
                        {genre.name} </h2>)
                    }
                </div>
            </div>
            {
                isHoverGameCard && (!isGameInWishlist || !isGameInCart) &&
                <>
                    <button type='button'
                        onClick={() => setIsHoverAddBtn(!isHoverAddBtn)}
                        className='game-card__add'>
                        {isHoverAddBtn ? <HiChevronDown size={10} /> : <HiPlus size={10} />}
                    </button>

                    <div className={`game-card__add-options ${isHoverAddBtn && 'show'}`}>

                        {
                            !isGameInWishlist && <button type='button'
                                onClick={addToWishlist}
                            > + wishlist <BsBookmarkPlus /></button>
                        }

                        {
                            !isGameInCart && <button type='button'
                                onClick={addToCart}
                            > + cart <BsCartPlus /></button>
                        }

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

            <div className='game-card__is-in-cart'>
                {isGameInWishlist && <BsBookmarkCheck />}
                {isGameInCart && <BsCartCheck />}
            </div>

        </div>
    );
}

GameCard.propTypes = {
    game: PropTypes.instanceOf(Object).isRequired
};

export default GameCard;