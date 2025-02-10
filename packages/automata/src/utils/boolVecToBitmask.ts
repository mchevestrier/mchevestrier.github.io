export default function boolVecToBitmask(vec: boolean[]) {
  const bitstring = vec.map((bit) => bit ? '1' : '0').join('');
  return parseInt(bitstring, 2);
}