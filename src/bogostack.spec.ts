import fc from 'fast-check'
import { BogoStack } from './bogostack'

type Model = { num: number };

class PushCommand implements fc.Command<Model, BogoStack> {
  constructor(readonly value: number) { }
  check = (m: Readonly<Model>) => true;
  run(m: Model, r: BogoStack): void {
    r.push(this.value); // impact the system
    ++m.num; // impact the model
  }
  toString = () => `push(${this.value})`;
}

class PopCommand implements fc.Command<Model, BogoStack> {
  check(m: Readonly<Model>): boolean {
    // should not call pop on empty list
    return m.num > 0;
  }
  run(m: Model, r: BogoStack): void {
    expect(typeof r.pop()).toEqual('number');
    --m.num;
  }
  toString = () => 'pop';
}

class SizeCommand implements fc.Command<Model, BogoStack> {
  check = (m: Readonly<Model>) => true;
  run(m: Model, r: BogoStack): void {
    expect(r.size()).toEqual(m.num);
  }
  toString = () => 'size';
}

// define the possible commands and their inputs
const allCommands = [
  fc.integer().map((v) => new PushCommand(v)),
  fc.constant(new PopCommand()),
  fc.constant(new SizeCommand()),
];

describe('Stateful PBT', () => {
  it('should match the model', () => {
    // run everything
    fc.assert(
      fc.property(fc.commands(allCommands, { size: '+1' }), (cmds) => {
        const s = () => ({ model: { num: 0 }, real: new BogoStack() });
        fc.modelRun(s, cmds);
      }),
      // { seed: -1114870394, endOnFailure: true }
      {verbose: 1}
      );
  });
});
