import { useState, createContext, useContext, useCallback } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();
const AddToCartContext = createContext();

export const useCart = () => useContext(CartContext);
export const useAddToCart = () => useContext(AddToCartContext);


export function CartProvider({ children }) {
    const [inCart, setInCart] = useState([]);

    const addToCart = useCallback((newGame) => {
        setInCart((prevCart) => [...prevCart, newGame]);
        console.log(newGame);
    }, [setInCart]);

    // const removeFromCart = useCallback((newGame) => {
    //     setInCart((prevCart) => [...prevCart, newGame]);
    //     console.log(newGame);
    // }, [setInCart]);

    return (
        <CartContext.Provider value={inCart}>
            <AddToCartContext.Provider value={addToCart}>
                {children}
            </AddToCartContext.Provider>
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};

