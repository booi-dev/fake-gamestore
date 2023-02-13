// import { useState, createContext, useContext, useCallback, useMemo } from "react";
// import PropTypes from "prop-types";

// const WishlistContext = createContext();
// const AddToWishlistContext = createContext();

// export const useWishlist = () => useContext(WishlistContext);
// export const useAddToWishlist = () => useContext(AddToWishlistContext);

// export function WishlistProvider({ children }) {
//     const [inWishlist, setInWishlist] = useState([]);

//     const addToWishlist = useCallback((gameToAdd) => {
//         setInWishlist((prevCart) => [...prevCart, gameToAdd]);
//     }, [setInWishlist]);

//     const removeFromWishlist = useCallback((gameToRemoveId) => {
//         setInWishlist((prevCart) => prevCart.filter(game => game.id !== gameToRemoveId));
//     }, [setInWishlist]);

//     const memoFuncs = useMemo(() => ({ addToWishlist, removeFromWishlist }), [addToWishlist, removeFromWishlist]);

//     return (
//         <WishlistContext.Provider value={inWishlist}>
//             <AddToWishlistContext.Provider value={memoFuncs}>
//                 {children}
//             </AddToWishlistContext.Provider>
//         </WishlistContext.Provider>
//     );
// }

// WishlistProvider.propTypes = {
//     children: PropTypes.node.isRequired
// };

