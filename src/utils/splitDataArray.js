
const addGamesToSplittedArray = (dataArray, resultedDataArray) => {
    const newResultedDataArray = resultedDataArray.map((arr) => [...arr]);

    let i = 0;
    let j = 0;
    while (j < dataArray.length) {
        newResultedDataArray[i].push(dataArray[j]);
        i = (i + 1) % newResultedDataArray.length;
        j += 1;
    }
    return newResultedDataArray;
};

const splitDataArray = function splitDataArrayInColumns(dataArray, numberOfColumns = 1) {
    const resultedDataArray = Array.from({ length: numberOfColumns }, () => []);
    return addGamesToSplittedArray(dataArray, resultedDataArray);
};

export default splitDataArray;