import { expect, test } from 'vitest';
import { getQueryParams, getCompleteURL } from '../fetch';

test('Should produce query params', () => {
    expect(getQueryParams('search', 'dead cell')).toBe('search=dead cell');
});

test.only('Should produce full api URL', () => {
    const queryParams = 'search="wow"';
    expect(getCompleteURL(queryParams)).toBe('https://api.rawg.io/api/games?search="wow"&key=ed4007e9ce974a66b5aaae4f47858eff');
});
