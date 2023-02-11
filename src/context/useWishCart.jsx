import { useReducer, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const WishCartContext = createContext();

export const useWishCart = () => useContext(WishCartContext);

const initialState = {
    wishlist: [],
};

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return { wishlist: [...state.wishlist, action.payload] };
        case 'remove':
            return { wishlist: state.wishlist.filter((item) => item.id !== action.payload) };
        case 'clear':
            return { wishlist: [] };
        default: return state;
    }
}

export function WishCartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    /*eslint-disable*/
    return (
        <WishCartContext.Provider value={{ state, dispatch }}>
            {children}
        </WishCartContext.Provider>
    );
}

WishCartProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const isInWishCart = (toCheckGameId, cart) => !!cart.find(game => game.id === toCheckGameId);

// export default WishCart;
