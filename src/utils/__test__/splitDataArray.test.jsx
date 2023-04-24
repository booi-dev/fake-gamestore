import splitDataArray from '../splitDataArray';

describe('tests for split-data-array', () => {

    test('split array into smaller array with same number of elements', () => {
        const beforeData = ['1', '2', '3', '4'];
        const afterData = [['1', '3',], ['2', '4']];
        expect(splitDataArray(beforeData, 2)).toStrictEqual(afterData);
    });

});

