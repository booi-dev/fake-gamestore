import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useCart, useCartMethods } from '../../context/useCart';
import isInCart from '../../utils/isInCart';

function GameToCart(props) {
    const { game, headerRef } = props;
    const { addToCart, removeFromCart } = useCartMethods();
    const inCart = useCart();

    const [isAdded, setIsAdded] = useState();

    const scrollToHeader = function scrollToHeader() {
        headerRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleAddToCart = function handleAddToCart() {
        addToCart({
            id: game?.id,
            game: game?.name,
            price: game?.price,
        });
        setIsAdded('added');
        scrollToHeader();
    };

    const handleRemoveFromCart = function handleRempveFromCart() {
        removeFromCart(game?.id);
        setIsAdded('');
    };

    useEffect(() => {
        if (isInCart(game?.id, inCart)) setIsAdded("added");
        else { setIsAdded(""); }
    });

    const handleAddCartBtn = function handleAddCartBtn() {
        if (isAdded === 'added') handleRemoveFromCart();
        else handleAddToCart();
    };

    return (
        <div className='game-view_price-add-container'>
            <span className='game-view_add-to-cart_price'> ${game?.price}</span>
            <button type='button'
                className={`game-view_add-to-cart_btn ${isAdded}`}
                onClick={handleAddCartBtn}
            >
                {isAdded === "added" ? "Remove from Cart" : "Add to Cart"}
            </button>
        </div>
    );
}

GameToCart.propTypes = {
    game: PropTypes.instanceOf(Object),
    headerRef: PropTypes.instanceOf(Object).isRequired,
};

GameToCart.defaultProps = {
    game: {},
};


export default GameToCart;