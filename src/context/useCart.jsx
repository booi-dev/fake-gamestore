// import { useState, createContext, useContext, useCallback, useMemo } from "react";
// import PropTypes from "prop-types";

// const CartContext = createContext();
// const CartMethodsContext = createContext();

// export const useCart = () => useContext(CartContext);
// export const useCartMethods = () => useContext(CartMethodsContext);

// export function CartProvider({ children }) {
//     const [inCart, setInCart] = useState([]);
//     // console.log(inCart);

//     const addToCart = useCallback((gameToAdd) => {
//         setInCart((prevCart) => [...prevCart, gameToAdd]);
//     }, [setInCart]);

//     const removeFromCart = useCallback((gameToRemoveId) => {
//         setInCart((prevCart) => prevCart.filter(game => game.id !== gameToRemoveId));
//     }, [setInCart]);

//     const memoFuncs = useMemo(() => (
//         {
//             addToCart,
//             removeFromCart,
//         }
//     ), [addToCart, removeFromCart]);

//     return (
//         <CartContext.Provider value={inCart}>
//             <CartMethodsContext.Provider value={memoFuncs}>
//                 {children}
//             </CartMethodsContext.Provider>
//         </CartContext.Provider>
//     );
// }

// CartProvider.propTypes = {
//     children: PropTypes.node.isRequired
// };

