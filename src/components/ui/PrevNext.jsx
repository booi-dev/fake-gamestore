import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import './PrevNext.scss';

export function Prev(props) {
    const { prevHandler } = props;
    return (
        <button type='button'
            className='prev-btn prev-next'
            onClick={() => prevHandler()}
        >
            <HiOutlineChevronLeft className="prev-icon" />
        </button>
    );
}

export function Next(props) {
    const { nextHandler } = props;
    return (
        <button type='button'
            className='next-btn prev-next'
            onClick={() => nextHandler()}
        >
            <HiOutlineChevronRight className="next-icon" />
        </button>
    );
}


Prev.propTypes = {
    prevHandler: PropTypes.func.isRequired,
};

Next.propTypes = {
    nextHandler: PropTypes.func.isRequired,
};