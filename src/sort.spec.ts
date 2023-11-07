import fc from 'fast-check'
import { wishfulSort } from './sort';

describe('PBT Example', () => {
    it('should sort correctly', () => {
        fc.assert(
            fc.property(fc.array(fc.integer()), (data) => {
                const sortedData = wishfulSort(data);
                for (let i = 1; i < data.length; ++i) {
                    expect(sortedData[i - 1]).toBeLessThanOrEqual(sortedData[i]);
                }
            }),
            { verbose: 1 });
    });
});
