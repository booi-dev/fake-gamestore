import { useReducer, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const WishCartContext = createContext();

export const useWishCart = () => useContext(WishCartContext);

const initialState = {
    items: [{
        id: 23213,
        game: "Maria Ozawa",
        price: 13,
        quantity: 1
    },
    {
        id: 2344,
        game: "Minami Aizawa",
        price: 13,
        quantity: 1
    },
    {
        id: 34321234,
        game: "Sasha Grey",
        price: 13,
        quantity: 2
    },

    {
        id: 43545,
        game: "Sasha Grey and mother",
        price: 13,
        quantity: 3
    }],
};

function reducer(state, action) {
    switch (action.type) {
        case 'add': {
            const isGameAlreadyInCart = !!state.items.find(game => game.id === action.payload.id);
            if (isGameAlreadyInCart) {
                const updatedItems = state.items.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
                return { items: updatedItems };
            }
            return { items: [...state.items, action.payload] };
        }
        case 'remove':
            return { items: state.items.filter((item) => item.id !== action.payload.id) };

        case 'remove conditionally': {
            console.log(action.paylod);


            return { items: state.items.filter((item) => item.id !== action.payload) };
        }

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
