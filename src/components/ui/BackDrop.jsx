import React from 'react';
import PropTypes from 'prop-types';

function BackDrop({ handler }) {

    const handleBackdropClick = () => {
        handler();
    };

    /* eslint-disable */

    return (
        <div className='app-back-drop'
            onClick={() => handleBackdropClick()}
            aria-label='backdrop'
            role='button'
        />
    );
}

BackDrop.propTypes = {
    handler: PropTypes.func,
}

BackDrop.defaultProp = {
    handler: PropTypes.func,
}

export default BackDrop;