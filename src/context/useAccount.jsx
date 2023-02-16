import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const AccountContext = createContext();

export const useAccount = () => useContext(AccountContext);


const tempGames = [
    {
        id: 28,
        name: "Red Dead Redemption 2",
        genres: [{ id: 4, name: 'Action' }, { id: 3, name: 'Adventure' }],
        released: '2018-10-26',
        background_image: 'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
        parent_platforms: [{ id: 1, name: 'PC', slug: 'pc' }, { id: 2, name: 'PlayStation', slug: 'playstation' }, { id: 3, name: 'Xbox', slug: 'xbox' }],
        tags: [{ id: 31, name: 'SinglePlayer', slug: 'singleplayer' }],
        price: 12,
        quantity: 1
    },
    {
        id: 4286,
        name: "BioShock",
        genres: [{ id: 4, name: 'Action' }, { id: 3, name: 'Shooter' }],
        released: '2018-10-26',
        background_image: "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
        parent_platforms: [{ id: 1, name: 'PC', slug: 'pc' }, { id: 2, name: 'PlayStation', slug: 'playstation' }, { id: 3, name: 'Xbox', slug: 'xbox' }, { id: 5, name: 'Apple Macintosh', slug: 'mac' }],
        tags: [{ id: 31, name: 'SinglePlayer', slug: 'singleplayer' }, { id: 24, name: 'RPG', slug: 'rpg' }],
        price: 9,
        quantity: 1
    }
];

const initialState = {
    myCredit: 100,
    myGames: tempGames
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
                myGames: [...state.myGames, action.payload]
            };
        case 'update': {
            console.log(action.payload);
            const updatedGames = state.myGames.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            });
            return {
                ...state,
                myGames: updatedGames
            };
        }

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


export const isGameOwn = (toCheckGame, myGames) => !!myGames.find(game => game.id === toCheckGame.id);