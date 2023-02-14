import React from 'react';
import PropTypes from 'prop-types';
import './CheckoutConfirm.scss';

function CheckoutConfirm(props) {
    const { userAccount, toggleCheckoutConfirm, total } = props;




    return (
        <>
            <div className='checkout-confirm'>
                <h1 className='checkout-confirm__title fs-lg mb-sm pb-sm'>CONFIRM PURCHASE</h1>
                <div className='checkout-confirm__balance pb-sm'>
                    <h1 className='fs-md'>Account Balance </h1>
                    <div>$ {userAccount.account}  </div>
                    <h1 className='fs-md'>Games Total </h1>
                    <div>$ {total}  </div>
                </div>
                <div className='checkout-confirm__difference pt-sm'>
                    <h1 className='fs-md'> Remaining Balance </h1>
                    <div>$ {userAccount.account - total}  </div>
                </div>
                <button type='button'
                    className='checkout-confirm-btn mt-md fs-xs'>CONFIRM</button>
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
    userAccount: PropTypes.instanceOf(Object).isRequired,
    toggleCheckoutConfirm: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired
};

export default CheckoutConfirm;