import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useWishCart, isInWishCart } from '../../context/useWishCart';

function GameToCart(props) {
    const { game, scrollToHeader } = props;

    const { cart, cartDispatch } = useWishCart();

    const [isAdded, setIsAdded] = useState();

    const gameDataToAdd = {
        id: game?.id,
        game: game?.name,
        price: game?.price,
        quantity: 0
    };

    const addToCart = function addToWishlistCart(toAddGame) {
        cartDispatch({ type: "add", payload: toAddGame });
        scrollToHeader();
    };

    const removeFromCart = function deleteFromWishlist(toRemoveGame) {
        cartDispatch({ type: 'remove', payload: toRemoveGame });
        scrollToHeader();
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

    return (
        <div className='game-view_price-add-container'>
            <span className='game-view_add-to-cart_price'> ${game?.price}</span>
            <button type='button'
                className={`game-view_add-to-cart_btn ${isAdded}`}
                onClick={toggleWishlist}
            >
                {isAdded === "added" ? "Remove from Cart" : "Add to Cart"}
            </button>
        </div>
    );
}

GameToCart.propTypes = {
    game: PropTypes.instanceOf(Object),
    scrollToHeader: PropTypes.func.isRequired,
};

GameToCart.defaultProps = {
    game: {},
};


export default GameToCart;