import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAccount } from '../../context/useAccount';
import { useWishCart } from '../../context/useWishCart';
import './CheckoutConfirm.scss';

function CheckoutConfirm(props) {
    const { toggleCheckoutConfirm, gameTotal, setPurchaseSuccessMsg } = props;

    const { cart, cartDispatch } = useWishCart();
    const { credit, creditDispatch, gamesDispatch } = useAccount();

    const [lowBalance, setLowBalance] = useState(false);

    const checkBalance = function checkBalanceGreatorThanGameTotal() {
        return credit.myCredit > gameTotal;
    };

    const balanceCalculate = function name() {
        creditDispatch({ type: 'remove', payload: gameTotal });
    };

    const addGamesToAccount = function name() {
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

        toggleCheckoutConfirm();
        setPurchaseSuccessMsg();
    };

    useEffect(() => {
        if (!checkBalance()) setLowBalance(true);
    }, []);


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

                {!lowBalance
                    && <div className='checkout-confirm__difference pt-sm'>
                        <h1 className='fs-md'> Remaining Balance</h1>
                        <div>$ {credit.myCredit - gameTotal}  </div>
                    </div>
                }

                {lowBalance && <div className='checkout-confirm__low-balance-status mt-md'> Not Enough Money</div>}

                {lowBalance || <button type='button'
                    className='checkout-confirm-btn mt-md fs-xs'
                    onClick={buyGames}>
                    CONFIRM</button>}
                <button type='button'
                    className='checkout-confirm__close-btn'
                    onClick={toggleCheckoutConfirm}>
                    x</button>
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
    toggleCheckoutConfirm: PropTypes.func.isRequired,
    gameTotal: PropTypes.number.isRequired,
    setPurchaseSuccessMsg: PropTypes.func.isRequired
};

export default CheckoutConfirm;