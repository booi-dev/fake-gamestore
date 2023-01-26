/* eslint-disable */

import { expect, test, vi } from 'vitest';
import axios from 'axios';
import useFetch, { getQueryParams, getCompleteURL } from '../fetch';

test('Should produce query params', () => {
    expect(getQueryParams('search', 'dead cell')).toBe('search=dead cell');
});

test('Should produce full api URL', () => {
    const queryParams = 'search="wow"';
    expect(getCompleteURL(queryParams)).toBe('https://api.rawg.io/api/games?search="wow"&key=ed4007e9ce974a66b5aaae4f47858eff');
});

vi.mock('axios')

test.only('Should fetch data', async () => {
    const API_KEY = 'ed4007e9ce974a66b5aaae4f47858eff';
    let url = `https://api.rawg.io/api/platforms?key=${API_KEY}`
    // expect(useFetch(url)).toBeArray()
    axios.get.mockResolvedValue(url)
    const result = await useFetch(url)
    // expect(result).toBeObject()
    expect(result).toBeArray()
});