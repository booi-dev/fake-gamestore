import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const AccountContext = createContext();

export const useAccount = () => useContext(AccountContext);

const initialState = {
    myCredit: 100,
    myGames: []
};

function creditReducer(state, action) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                myCredit: state.myCredit + action.payload,
            };
        case 'remove':
            return {
                ...state,
                myCredit: state.myCredit - action.payload,
            };
        default: return state;
    }
}

function gamesReducer(state, action) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                myGames: [...state.myGames, ...action.payload]
            };

        case 'remove':
            return {
                ...state,
                myGames: state.myGames.filter((game) => game.id !== action.payload)
            };

        default: return state;
    }
}

export function AccountProvider({ children }) {

    const [credit, creditDispatch] = useReducer(creditReducer, initialState);
    const [games, gamesDispatch] = useReducer(gamesReducer, initialState);

    /*eslint-disable*/
    return (
        <AccountContext.Provider value={
            { credit, creditDispatch, games, gamesDispatch }}
        >
            {children}
        </AccountContext.Provider>
    );
}

AccountProvider.propTypes = {
    children: PropTypes.node.isRequired
};
