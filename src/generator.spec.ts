import fc from 'fast-check'

describe('PBT Example', () => {
    it('should give me some sample values', () => {
        expect(fc.sample(fc.nat(99), { numRuns: 10, seed: 42 })).toEqual([95, 94, 72, 0, 99, 32, 74, 99, 1, 62])
    });

    it('should give me statistics that shows it is in fact biased against the endpoints', () => {
        fc.statistics(fc.nat(99), v => `value ${v}`, { numRuns: 100_000 })
    });
});
