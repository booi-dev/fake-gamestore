import { useState } from 'react';
import PropTypes from 'prop-types';
import './QuantitySelector.scss';

function QuantitySelector(props) {

    const { game, updater } = props;

    const [selectedOption, setSelectedOption] = useState(game?.quantity);

    const handleOptionChange = (event) => {
        // convert string value type into number type
        const newQuantity = +(event.target.value);
        console.log(newQuantity);
        setSelectedOption(newQuantity);
        const updatedGame = { ...game, quantity: newQuantity };
        updater(updatedGame);
    };

    return (
        <select className='quantity-selector' value={selectedOption} onChange={handleOptionChange}>
            <option value={selectedOption}>{selectedOption}</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
        </select>
    );
}

QuantitySelector.propTypes = {
    game: PropTypes.instanceOf(Object).isRequired,
    updater: PropTypes.func.isRequired
};

export default QuantitySelector;
