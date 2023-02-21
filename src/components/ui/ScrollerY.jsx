import { useState } from 'react';
import PropTypes from 'prop-types';

import './ScrollerY.scss';

function ScrolerY({ handler, genres }) {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleOnClick = function handleOptionOnClick(genre, index) {
        setActiveIndex(index);
        handler(genre);
    };

    return (
        <div className='scrollerY__options-container'>
            <div className='scrollerY__options'>
                {
                    genres.map((genre, index) => <button type='button'
                        key={index}
                        className={`scrollerY__option ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleOnClick(genre, index)}> {genre} </button>)
                }

            </div>
        </div>
    );
}

ScrolerY.propTypes = {
    handler: PropTypes.func.isRequired,
    genres: PropTypes.instanceOf(Array).isRequired
};

export default ScrolerY;