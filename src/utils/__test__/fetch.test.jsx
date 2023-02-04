// import axios from 'axios';
import { createEndpoint, createQuery, createMultiQuery, createCompleteURL } from '../fetch';

describe('testing fetch utility', () => {

    it('should return the same argument', () => {
        expect(createEndpoint('Games')).toBe('Games');
    });

    it('should create a new query params', () => {
        expect(createQuery('search', 'dead cell')).toBe('search=dead cell');
    });

    it('should join multiple query params by "&" as seperator', () => {
        const firstQuery = createQuery('search', 'hollow knight');
        const secondQuery = createQuery('genre', 'indie');
        expect(createMultiQuery([firstQuery, secondQuery])).toBe('search=hollow knight&genre=indie');
    });

    it('should create full URL', () => {
        const endPoint = createEndpoint("games");
        const query = createQuery('search', 'halo');
        expect(createCompleteURL(endPoint, query)).toBe('https://api.rawg.io/api/games?search=halo&key=ed4007e9ce974a66b5aaae4f47858eff');
    });

    // mock less test. not good.
    // it.only('should return an array of games data', async () => {
    //     const gameData = await fetchData('games', 'search=dead')
    //     expect(Array.isArray(gameData)).toBe(true);
    // })

});


