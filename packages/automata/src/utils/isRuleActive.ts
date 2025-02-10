import bitmaskToBoolVec from "./bitmaskToBoolVec";
import { ruleLength } from "./constants";

export default function isRuleActive(i: number, rule: number) {
  return !!Number(bitmaskToBoolVec(rule, ruleLength)[i]);
}
