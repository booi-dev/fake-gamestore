import { useState, createContext, useContext, useCallback, useMemo } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();
const AddToCartContext = createContext();

export const useCart = () => useContext(CartContext);
export const useAddToCart = () => useContext(AddToCartContext);

export function CartProvider({ children }) {
    const [inCart, setInCart] = useState([]);

    const addToCart = useCallback((gameToAdd) => {
        setInCart((prevCart) => [...prevCart, gameToAdd]);
    }, [setInCart]);

    const removeFromCart = useCallback((gameToRemoveId) => {
        setInCart((prevCart) => prevCart.filter(game => game.id !== gameToRemoveId));
    }, [setInCart]);

    const isInCart = useCallback(() => {


    }, []);

    const memoFuncs = useMemo(() => (
        {
            addToCart,
            removeFromCart,
            isInCart
        }
    ), [addToCart, removeFromCart]);

    return (
        <CartContext.Provider value={inCart}>
            <AddToCartContext.Provider value={memoFuncs}>
                {children}
            </AddToCartContext.Provider>
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};

