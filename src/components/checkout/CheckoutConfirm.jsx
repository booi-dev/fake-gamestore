import React from 'react';
import PropTypes from 'prop-types';
import { useAccount } from '../../context/useAccount';
import { useWishCart } from '../../context/useWishCart';
import './CheckoutConfirm.scss';

function CheckoutConfirm(props) {
    const { toggleCheckoutConfirm, gameTotal } = props;

    const { cart, cartDispatch } = useWishCart();
    const { credit, creditDispatch, games, gamesDispatch } = useAccount();

    const checkBalance = function checkBalanceGreatorThanGameTotal() {
        console.log(credit.myCredit > gameTotal);
        return credit.myCredit > gameTotal;
    };

    const balanceCalculate = function name() {
        console.log(gameTotal);
        creditDispatch({ type: 'remove', payload: gameTotal });
    };

    const addGamesToAccount = function name() {
        console.log(cart?.items);
        gamesDispatch({ type: 'add', payload: cart?.items });
    };

    const removeGames = function removeGamesFromCart() {
        cartDispatch({ type: 'clear' });
    };

    const buyGames = function buyGamesOnClick() {
        if (!checkBalance()) return;
        addGamesToAccount();
        balanceCalculate();
        removeGames();
    };

    return (
        <>
            <div className='checkout-confirm'>
                <h1 className='checkout-confirm__title fs-lg mb-sm pb-sm'>CONFIRM PURCHASE</h1>
                <div className='checkout-confirm__balance pb-sm'>
                    <h1 className='fs-md'>Account Balance </h1>
                    <div>$ {credit.myCredit}  </div>
                    <h1 className='fs-md'>Games Total </h1>
                    <div>$ {gameTotal}  </div>
                </div>
                <div className='checkout-confirm__difference pt-sm'>
                    <h1 className='fs-md'> Remaining Balance </h1>
                    <div>$ {credit.myCredit - gameTotal}  </div>
                </div>
                <button type='button'
                    className='checkout-confirm-btn mt-md fs-xs'
                    onClick={buyGames}>
                    CONFIRM</button>
            </div>
            <button type='button'
                aria-label="Backdrop"
                className='checkout-confirm__backdrop'
                onClick={toggleCheckoutConfirm}
            />
        </>
    );
}

CheckoutConfirm.propTypes = {
    // userAccount: PropTypes.instanceOf(Object).isRequired,
    toggleCheckoutConfirm: PropTypes.func.isRequired,
    gameTotal: PropTypes.number.isRequired
};

export default CheckoutConfirm;