import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link as Scroll } from 'react-scroll';
import { useWishCart, isInWishCart } from '../../context/useWishCart';

function GameToCart(props) {
    const { game } = props;
    const { cart, cartDispatch } = useWishCart();

    const [isAdded, setIsAdded] = useState();

    const gameDataToAdd = {
        ...game,
        quantity: 1
    };

    const addToCart = function addToWishlistCart(toAddGame) {
        cartDispatch({ type: "add", payload: toAddGame });
    };

    const removeFromCart = function deleteFromWishlist(toRemoveGame) {
        cartDispatch({ type: 'remove', payload: toRemoveGame });
    };

    const isGameInCart = isInWishCart(game?.id, cart?.items);

    const toggleWishlist = function addOrRemoveWishlist() {
        if (isGameInCart) removeFromCart(game);
        else { addToCart(gameDataToAdd); }
    };

    useEffect(() => {
        if (isInWishCart(game?.id, cart.items)) setIsAdded("added");
        else { setIsAdded(""); }
    });
    /* eslint-disable */
    return (
        <div className='game-view_price-add-container'>
            <span className='game-view_add-to-cart_price'> ${game?.price}</span>

            <Scroll to='header-top' spy={true} smooth={true} duration={1000}  >
                <button type='button'
                    className={`game-view_add-to-cart_btn ${isAdded}`}
                    onClick={toggleWishlist}
                >
                    {isAdded === "added" ? "Remove from Cart" : "Add to Cart"}
                </button>
            </Scroll>

        </div>
    );
}

GameToCart.propTypes = {
    game: PropTypes.instanceOf(Object),
};

GameToCart.defaultProps = {
    game: {},
};


export default GameToCart;