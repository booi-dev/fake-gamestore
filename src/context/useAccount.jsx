import { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const AccountContext = createContext();

export const useAccount = () => useContext(AccountContext);

export function AccountProvider({ children }) {

    const [account, setAccount] = useState(100);

    const addToAccount = function addSumToAccount(sum) {
        setAccount(prevAccount => prevAccount + sum);
    };

    const minusFromAccount = function addSumToAccount(sum) {
        setAccount(prevAccount => prevAccount - sum);
    };

    /*eslint-disable*/
    return (
        <AccountContext.Provider value={{ account, addToAccount, minusFromAccount }}>
            {children}
        </AccountContext.Provider>
    );
}

AccountProvider.propTypes = {
    children: PropTypes.node.isRequired
};
