import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDatum } from '../../utils/fetch';
import SearchHeader from '../search/SearchHeader';
import { useAddToCart } from '../../context/useCart';
import './GameView.scss';

function GameView() {

    // const { addToCart } = useCart();
    const { addToCart, removeFromCart } = useAddToCart();
    // console.log(addToCart, cartContext);

    const { gameId } = useParams();

    const [game, setGame] = useState({});
    const [showFullDesc, setShowFullDesc] = useState('hidden');
    const [isAdded, setIsAdded] = useState('');

    function cutWordCount(words, wordCount) {
        const newWords = words.slice(0, wordCount);
        return newWords;
    }

    const fetchGameData = async function sdfhfsdk() {
        const data = await fetchDatum(gameId);
        setGame({ ...data, short_description: cutWordCount(data?.description_raw, 150) });
    };

    useEffect(() => {
        fetchGameData();
    }, []);

    const handleAddToCart = function handleAddToCart() {
        addToCart({
            id: game?.id,
            game: game?.name,
            price: game?.price,
        });
        setIsAdded('added');
    };

    const handleRemoveFromCart = function handleRempveFromCart() {
        removeFromCart(game?.id);
        setIsAdded('');
    };

    const handleAddCartBtn = function handleAddCartBtn() {
        if (isAdded === 'added') handleRemoveFromCart();
        else handleAddToCart();
    };

    return (
        <>
            <SearchHeader />
            <div className='game-view'>
                <h1 className='game-view_title'>{game?.name}</h1>
                <div className='game-view__info-container'>
                    <div className='game-view__imgs'>
                        <img src={game?.background_image_additional}
                            className='game-view__full-img'
                            alt='game pic' />
                    </div>
                    <div className='game-view__info'>
                        <div className='game-view__poster-container'>
                            <img src={game?.background_image}
                                className='game-view__poster'
                                alt='game pic' />

                            <div className='game-view__info__released-date'>
                                <span className='sub-title date'>RELEASED:</span>
                                <span className='res'> {game?.formattedReleasedDate}</span>
                            </div>
                        </div>

                        <div className='game-view__info-all'>
                            <p className='game-view__info__short-desc'
                            > {game?.short_description}...
                                <button type='button'
                                    className='game-view__info__read-full-btn'
                                    onClick={() => setShowFullDesc('show')}
                                > read full</button>
                            </p>

                            <p className={`game-view__info__full-desc ${showFullDesc}`}
                                onMouseLeave={() => setShowFullDesc('hidden')}
                            > {game?.description_raw}</p>

                            <div className='game-view__info__sub_res-container'>
                                <div className='game-view__info__subtitles'>
                                    <h2 className='sub-title'>ESRB:</h2>
                                    <h2 className='res'> {game?.esrb_rating?.name}</h2>
                                </div>
                                <div className='game-view__info__subtitles'>
                                    <h2 className='sub-title' >METACRITIC:</h2>
                                    <h2 className='res'> {game?.metacritic}</h2>
                                </div>

                                <div className='game-view__info__subtitles'>
                                    <h2 className='sub-title'>DEVELOPER(S):</h2>
                                    {game?.developers?.map(dev => <h2 className='res' key={dev.id}> {dev.name}</h2>)}
                                </div>
                                <div className='game-view__info__subtitles'>
                                    <h2 className='sub-title'>PUBLISHER(S):</h2>
                                    {game?.publishers?.map(pub => <h2 className='res' key={pub?.id}> {pub?.name}</h2>)}
                                </div>
                                <div className='game-view__info__subtitles genres'>
                                    {game?.genres?.slice(0, 3).map(genre => <h2 className='res genre' key={genre?.id}> {genre?.name}</h2>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='game-view_add-to-cart-container'>
                    <h1 className='game-view_add-to-cart_title'>
                        <span className='buy'> Buy </span>
                        {game?.name}
                    </h1>
                    <div className='game-view_price-add-container'>
                        <span className='game-view_add-to-cart_price'> ${game?.price}</span>
                        <button type='button'
                            className={`game-view_add-to-cart_btn ${isAdded}`}
                            onClick={handleAddCartBtn}
                        >
                            {isAdded === "added" ? "Remove from Cart" : "Add to Cart"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GameView;