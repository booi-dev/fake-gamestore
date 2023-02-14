import { useReducer, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const WishCartContext = createContext();

export const useWishCart = () => useContext(WishCartContext);

const initialState = {
    items: [{
        id: 23213,
        game: "Maria Ozawa",
        price: 13,
        quantity: 0
    },
    {
        id: 2344,
        game: "Minami Aizawa",
        price: 13,
        quantity: 1
    },
    {
        id: 3434,
        game: "Sasha Grey",
        price: 13,
        quantity: 2
    }],
};

// const isIndie = !!game.genres.find(g => g.name === "Indie");

function reducer(state, action) {
    switch (action.type) {
        // case 'add': return { items: [...state.items, action.payload] };
        case 'add': {
            const isGameAlreadyInCart = !!state.items.find(game => game.id === action.payload.id);

            if (isGameAlreadyInCart) {
                const updatedItems = state.items.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
                console.log(isGameAlreadyInCart);
                return { items: updatedItems };
            }
            return { items: [...state.items, action.payload] };
        }
        // case 'addQ': {
        //     const gameIndex = state.items.findIndex((game) => game.id === action.payload.id);

        //     state.items[gameIndex] = action.payload;

        //     console.log(gameIndex);

        //     return {items: [ ...state.items]};
        // }
        case 'remove':
            return { items: state.items.filter((item) => item.id !== action.payload) };
        case 'clear':
            return { items: [] };
        default: return state;
    }
}

export function WishCartProvider({ children }) {
    const [wishlist, wishDispatch] = useReducer(reducer, initialState);
    const [cart, cartDispatch] = useReducer(reducer, initialState);

    /*eslint-disable*/
    return (
        <WishCartContext.Provider value={
            { wishlist, wishDispatch, cart, cartDispatch }
        }>
            {children}
        </WishCartContext.Provider>
    );
}

WishCartProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const isInWishCart = (toCheckGameId, wishcart) => !!wishcart.find(game => game.id === toCheckGameId);
