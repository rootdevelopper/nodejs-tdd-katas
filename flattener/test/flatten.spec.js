const Flattener = require("../flatten");

describe('Flattener', () => {

    it('should return a flat list', () => {
        const flattener = new Flattener()

        let testSet1 = [2, [2, 3]];
        let expectedSet = [2, 2, 3];

        let flatList = flattener.flatten(testSet1);
        
        const x = expectedSet.toString();
        const y = flatList.toString();
        
        expect(x).toEqual(y);
    });

    it('should return a flat list on 2 level nested or more', () => {
        const flattener = new Flattener()

        let testSet = [2, [2, 3, [4, 5, 7, [5, 6, 8]], [5, 6, 7]]];
        let expectedSet = [2, 2, 3, 4, 5, 7, 5, 6, 8, 5, 6, 7];

        let flatList = flattener.flatten(testSet);

        const x = expectedSet.toString();
        const y = flatList.toString();
        expect(x).toEqual(y);
    });

    it('should sort a short list of unordered numbers', () => {
        const flattener = new Flattener()
        const listOfUnOrdered = [6, 1, 7];
        const expectedOrder = [1, 6, 7];
        
        const orderedInAscending = flattener.sortListInAscendingOrder(listOfUnOrdered);
        expect(orderedInAscending).toEqual(expectedOrder);
    });

    it('should sort a short list of unordered numbers', () => {
        const flattener = new Flattener()
        const listOfUnOrdered = [6, 1, 7, 9, 7, 6, 7, 2, 3];
        const expectedOrder = [1,2,3,6,6,7,7,7,9];

        const orderedInAscending = flattener.sortListInAscendingOrder(listOfUnOrdered);
        expect(orderedInAscending).toEqual(expectedOrder);
    });
});
