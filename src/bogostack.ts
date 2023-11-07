
export class BogoStack {
  data: number[] = [];
  allocation = 10;
  cachedSize = 0;

  push = (v: number) => {
    if(this.data.length + 1 > this.allocation)
    {
      this.cachedSize += this.allocation;
      this.allocation *= 2;
    }
    this.cachedSize += 1;    
    return this.data.push(v);
  };

  pop = () => {
    this.cachedSize -= 1;
    return this.data.pop()!;
  };
  size = () => this.cachedSize;
}
