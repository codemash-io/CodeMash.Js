export class Guid {
  constructor(public guid: string) {}

  public ToString(): string {
    return this.guid;
  }

  // Static member
  static NewGuid(): Guid {
    let result: string;
    let i: string;
    let j: number;

    result = '';
    for (j = 0; j < 32; j += 1) {
      if (j === 8 || j === 12 || j === 16 || j === 20) {
        result += '-';
      }

      i = Math.floor(Math.random() * 16)
        .toString(16)
        .toUpperCase();

      result += i;
    }
    return new Guid(result);
  }
}
