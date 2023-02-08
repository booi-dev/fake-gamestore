import { useState } from 'react';
import PropTypes from 'prop-types';
import { useAddToCart } from '../../context/useCart';

function AddToCart(props) {
    const { game, headerRef } = props;
    const { addToCart, removeFromCart } = useAddToCart();

    const [isAdded, setIsAdded] = useState('');

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

AddToCart.propTypes = {
    game: PropTypes.instanceOf(Object).isRequired,
    headerRef: PropTypes.instanceOf(Object).isRequired,
};

// AddToCart.defaultProps = {
//     game: {},
// };


export default AddToCart;