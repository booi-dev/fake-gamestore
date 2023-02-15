import React from 'react';
import PropTypes from 'prop-types';
import './QuantitySelector.scss';

function QuantitySelector({ quantity }) {
    return (
        <select className='quantity-selector'>
            <option value={quantity}>{quantity}</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
        </select>
    );
}

QuantitySelector.propTypes = {
    quantity: PropTypes.number.isRequired
};

export default QuantitySelector;
