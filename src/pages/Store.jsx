import { useEffect } from 'react';
import axios from 'axios';
import StoreHero from "../components/store/StoreHero";

const RAWG_API_KEY = 'ed4007e9ce974a66b5aaae4f47858eff';

function Store() {

    useEffect(() => {
        axios.get(`https://api.rawg.io/api/games?search='dead cell'&key=${RAWG_API_KEY}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    return (
        <div className='store'>
            <StoreHero />
            <div className='store_container'>
                i dont care
            </div>
        </div>
    );
}

export default Store;