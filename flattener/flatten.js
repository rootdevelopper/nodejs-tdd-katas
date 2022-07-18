// flatten([], 4, [5, 6, 7 [3, [4, 5, 7]]]) = [1, 3, 4, 6, 8, 9]
// and sort the result 

module.exports = class Flattener {

    flatten(nestedList) {
        const listOfFlatten = []
        nestedList.forEach(element => {
            if (typeof element == Array) {
                flatten(element);
            } else {
                listOfFlatten.push(element);
            }
        });
        return listOfFlatten
    }

    sortListInAscendingOrder(listToSort) {
        let tempValue;
        listToSort.forEach((currentValue, index) => {
            for (let i = 0; i < listToSort.length; i++) {
                if (currentValue < listToSort[i]) {
                    tempValue = listToSort[index];
                    listToSort[index] = listToSort[i];
                    listToSort[i] = tempValue;
                }
            }
        })
        return listToSort;
    }
}
