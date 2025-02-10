export default function bitmaskToBoolVec(n: number, length: number): boolean[] {
  return n.toString(2).padStart(length, '0').split('').map(Number).map(Boolean);
}
