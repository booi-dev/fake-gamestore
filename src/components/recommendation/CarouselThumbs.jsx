import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CarouselThumbs.scss';

function CarouselThumbs(props) {
    const { serial, activeSerial, updateCurrentGame } = props;
    const [activeClass, setActiveClass] = useState('');

    useEffect(() => {
        if (serial === activeSerial) setActiveClass('active');
        else { setActiveClass(''); }
    }, [activeSerial]);

    return (
        <button type='button'
            aria-label='button'
            className={`carousel-thumbs_thumb ${activeClass}`}
            onClick={() => updateCurrentGame(serial)}
        />
    );
}

CarouselThumbs.propTypes = {
    // game: PropTypes.func.isRequired,
    serial: PropTypes.number.isRequired,
    activeSerial: PropTypes.number.isRequired,
    updateCurrentGame: PropTypes.func.isRequired,
};

export default CarouselThumbs;