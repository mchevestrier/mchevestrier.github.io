import atSlice from "./atSlice";
import bitmaskToBoolVec from "./bitmaskToBoolVec";
import boolVecToBitmask from "./boolVecToBitmask";
import { axiomLength, patternLength, ruleLength } from "./constants";

export default function produce(axiom: number, rule: number) {
  const vec = bitmaskToBoolVec(axiom, axiomLength);
  const production = Array(axiomLength).fill(0);

  const patterns = bitmaskToBoolVec(rule, ruleLength);

  const padding = (patternLength - 1) / 2; // 1

  vec.forEach((_, i) => {
    const neighborhood = atSlice(i-padding, i+padding, vec);
    const state = boolVecToBitmask(neighborhood);

    const seven = ruleLength - 1; // TODO: endianness utilities
    production[i] = patterns[seven - state];
  });

  return boolVecToBitmask(production);
}