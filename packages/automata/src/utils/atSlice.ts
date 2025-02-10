export default function atSlice<T>(a: number, z: number, arr: T[]) {
  const result = [];

  for (let i = a; i <= z; i++) {
    const e = arr.at(i % arr.length);
    if ('undefined' !== typeof e) result.push(e);
  }

  return result;
}

// console.assert(JSON.stringify(atSlice(-1, 2, [1, 2, 3, 4])) === JSON.stringify([4, 1, 2, 3]));
