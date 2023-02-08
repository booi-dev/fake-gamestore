import React from 'react';
import PropTypes from 'prop-types';
import { RiPlaystationFill, RiXboxFill, RiAppleFill, RiWindowsFill, RiGlobalLine } from 'react-icons/ri';
import { SiIos, SiLinux, SiNintendoswitch } from "react-icons/si";
import { HiChevronDoubleRight } from 'react-icons/hi';
import { DiAndroid } from 'react-icons/di';


function MoreInfo(props) {
    const { game } = props;

    const platformIcons = {
        playstation: <RiPlaystationFill className='icon' />,
        xbox: <RiXboxFill className='icon' />,
        mac: <RiAppleFill className='icon' />,
        linux: <SiLinux className='icon' />,
        nintendo: <SiNintendoswitch className='icon' />,
        web: <RiGlobalLine className='icon' />,
        pc: <RiWindowsFill className='icon' />,
        android: <DiAndroid className='icon' />,
        ios: <SiIos className='icon' />,
    };

    return (
        <div className='game-view__more-info'>
            <div className='flex-center'>
                {game?.parent_platforms
                    ?.map((pf) => <span key={pf?.platform?.id}
                        className='game-view__more-info__platforms'
                    >
                        {platformIcons[pf?.platform?.slug]}
                    </span>)}

                <button type='button'
                    className='website-link'>
                    <a href={game?.website}>
                        official site
                        <HiChevronDoubleRight className='icon' />
                    </a>
                </button>
            </div>

            <button type='button'
                className='add-to-wishlist-btn'>
                add to wishlist
            </button>
        </div>

    );
}

MoreInfo.propTypes = {
    game: PropTypes.instanceOf(Object)
};

MoreInfo.defaultProps = {
    game: {},
};



export default MoreInfo;