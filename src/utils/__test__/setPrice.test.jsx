import setPrice from '../setPrice';


describe('testing setPrice', () => {
    test('return correct price for indie games', () => {
        const gameData = {
            genres: [{ name: 'Indie' }],
            released: '2010-01-01'
        };
        const price = 5.7;
        const expectedPrice = Math.ceil(price * 2) / 2;

        const result = setPrice(gameData);
        expect(result).toBe(expectedPrice);
    });

    test('return correct price for non-indie games', () => {

        const gameData = {
            genres: [{ name: 'Action' }],
            released: '2010-01-01'
        };
        const price = 8.7;
        const expectedPrice = Math.ceil(price * 2) / 2;
        const result = setPrice(gameData);
        expect(result).toBe(expectedPrice);
    });

});