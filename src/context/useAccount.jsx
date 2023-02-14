import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const AccountContext = createContext();

export const useAccount = () => useContext(AccountContext);

const initialState = {
    myCredit: 100,
    ownGames: []
};

function creditReducer(state, action) {
    switch (action) {
        case 'add':
            return {
                ...state,
                credit: state.credit + action.payload,
            };
        case 'remove':
            return {
                ...state,
                credit: state.credit - action.payload,
            };
        default: return state;
    }
}

function gamesReducer(state, action) {
    switch (action) {
        case 'add':
            return {
                ...state,
                games: [...state.games, action.payload]
            };

        case 'remove':
            return {
                ...state,
                games: state.games.filter((game) => game.id !== action.payload)
            };

        default:
            break;
    }
}


export function AccountProvider({ children }) {

    // const [account, setAccount] = useState(100);

    const [credit, creditDispatch] = useReducer(creditReducer, initialState);
    const [games, gamesDispatch] = useReducer(gamesReducer, initialState);

    // const addToAccount = function addSumToAccount(sum) {
    //     setAccount(prevAccount => prevAccount + sum);
    // };

    // const minusFromAccount = function addSumToAccount(sum) {
    //     setAccount(prevAccount => prevAccount - sum);
    // };

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
