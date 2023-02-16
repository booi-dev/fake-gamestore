import { useReducer, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const WishCartContext = createContext();

export const useWishCart = () => useContext(WishCartContext);

const initialState = {
    items: []
};

function reducer(state, action) {
    switch (action.type) {
        case 'add': {
            const isGameInCart = !!state.items.find(game => game.id === action.payload.id);
            if (isGameInCart) {
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

        case 'update': {
            console.log(action.payload);
            const updatedItems = state.items.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            });
            return { items: updatedItems };
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
