import IStack from "./IStack";

export default class Stack implements IStack {
  stack: string[];

  constructor(stack: string[]) {
    this.stack = stack;
  }

  push(item: string) {
    this.stack.push(item);
  }

  pop(): string | undefined {
    return this.stack.pop();
  }

  size(): number {
    return this.stack.length;
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }

  view(): void {
    for (let i = this.stack.length - 1; i >= 0; i--) {
      console.log(this.stack[i]);
    }
  }

  clearArray(): void {
    this.stack = [];
  }
}
