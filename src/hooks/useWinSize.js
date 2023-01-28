import { useState, useEffect } from 'react';

function useWinSize() {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setwindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return windowWidth;
}

export default useWinSize;