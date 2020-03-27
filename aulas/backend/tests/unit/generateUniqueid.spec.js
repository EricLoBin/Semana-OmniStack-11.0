const generateUniqueid = require('../../src/unit/generateUniqueid')

describe('Generate unique id',() => {
    it('should generate a unique id', () => {
        const id = generateUniqueid();

        expect(id).toHaveLength(8);
    });
});
