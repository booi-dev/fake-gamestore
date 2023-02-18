// import SearchHeader from '../components/search/SearchHeader';
import GameList from '../components/game/GameList';
import './MyGames.scss';

function MyGames() {
    return (
        <div className='my-games'>
            {/* <SearchHeader /> */}
            <GameList />
        </div>
    );
}

export default MyGames;