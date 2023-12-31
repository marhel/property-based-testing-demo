import fc from 'fast-check'
import { calculateSoundVolume } from './volume';

// The calculateSoundVolume impl can be found in volume.ts

describe('PBT Example', () => {
    it('volume should never be negative', () => {
        fc.assert(
            fc.property(fc.nat(255), fc.nat(255), fc.nat(255), (amp, pan, reverb) => {
                const volume = calculateSoundVolume(amp, pan, reverb);
                expect(volume).toBeGreaterThanOrEqual(0);
            }),
            { verbose: 1, seed: 659421825 });
    });

    it('even with out-of-range inputs, volume should still not be negative', () => {
        fc.assert(
            fc.property(fc.integer(), fc.integer(), fc.integer(), (amp, pan, reverb) => {
                const volume = calculateSoundVolume(amp, pan, reverb);
                expect(volume).toBeGreaterThanOrEqual(0);
            }),
            { verbose: 1, seed: 659421825 });
    });

});
