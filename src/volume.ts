export function calculateSoundVolume(amp: number, pan: number, reverb: number): number {
  const rightDamper = pan >= 128 ? 1 : pan / 128;
  const right = rightDamper * (amp * amp + reverb);
  const leftDamper = pan < 128 ? 1 : (256 - pan) / 128;
  const left = leftDamper * (amp * amp + reverb);

  return Math.sqrt(left + right);
}
