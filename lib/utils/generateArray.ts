export default function generateArray(length: number): Array<number> {
  return Array.from(new Array(length)).map((_, index) => index);
}
