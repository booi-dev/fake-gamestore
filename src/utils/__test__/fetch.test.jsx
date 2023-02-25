import { vi } from 'vitest';
import axios from 'axios';
import { createEndpoint, createQuery, createMultiQuery, fetchDatum, fetchData } from '../fetch';

describe('testing fetch utility', () => {

    test('createEndpoint return the same argument', () => {
        expect(createEndpoint('Games')).toBe('Games');
    });

    test('createQuery join parameters with "=" ', () => {
        expect(createQuery('search', 'dead cell')).toBe('search=dead cell');
    });

    test('createMultiQuery join multiple query params by "&" ', () => {
        const firstQuery = createQuery('search', 'hollow knight');
        const secondQuery = createQuery('genre', 'indie');
        expect(createMultiQuery([firstQuery, secondQuery])).toBe('search=hollow knight&genre=indie');
    });

    vi.mock(axios);

    test('fetchDatu, return an object', async () => {
        const gameData = await fetchData('games', 'search=mario');
        expect(Array.isArray(gameData)).toBe(true);

        // instanceof Object
    });

    test('return an object', async () => {
        const gameData = await fetchDatum();
        expect(gameData instanceof Object).toBe(true);
    });

});


