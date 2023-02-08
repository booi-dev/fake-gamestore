import React from 'react';
import PropTypes from 'prop-types';
import { RiPlaystationFill, RiXboxFill, RiAppleFill, RiWindowsFill, RiGlobalLine } from 'react-icons/ri';
import { SiIos, SiLinux, SiNintendoswitch } from "react-icons/si";
import { DiAndroid } from 'react-icons/di';


function MoreInfo(props) {
    const { game } = props;

    console.log(game);

    const platformIcons = {
        playstation: <RiPlaystationFill />,
        xbox: <RiXboxFill />,
        mac: <RiAppleFill />,
        linux: <SiLinux />,
        nintendo: <SiNintendoswitch />,
        web: <RiGlobalLine />,
        pc: <RiWindowsFill />,
        android: <DiAndroid />,
        ios: <SiIos />,

    };

    return (
        <div className='game-view__more-info'>
            <div>
                {game?.parent_platforms
                    ?.map((pf) => <span key={pf?.platform?.id}
                        className='game-view__more-info__platforms'
                    >
                        {platformIcons[pf?.platform?.slug]}
                    </span>)}
            </div>
            <div>
                visit official site
            </div>
            <div>
                add to wishlist
            </div>
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