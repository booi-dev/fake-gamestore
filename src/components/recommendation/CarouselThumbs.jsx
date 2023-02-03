import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CarouselThumbs.scss';

function CarouselThumbs(props) {
    const { serial, activeSerial } = props;
    const [activeClass, setActiveClass] = useState('');

    useEffect(() => {
        if (serial === activeSerial) setActiveClass('active');
        else { setActiveClass(''); }
    }, [activeSerial]);

    return (
        <span className={`carousel-thumbs_thumb ${activeClass}`} />
    );
}

CarouselThumbs.propTypes = {
    // game: PropTypes.func.isRequired,
    serial: PropTypes.number.isRequired,
    activeSerial: PropTypes.number.isRequired,
};

export default CarouselThumbs;