import { useMemo, useState } from "react";

import Pattern from "./Pattern";
import isRuleActive from "../utils/isRuleActive";
import range from "../utils/range";
import produce from "../utils/produce";
import bitmaskToBoolVec from "../utils/bitmaskToBoolVec";
import { axiomLength, ruleLength } from "../utils/constants";
import cell from "../utils/cell";

const patterns = [0b111, 0b110, 0b101, 0b100, 0b011, 0b010, 0b001, 0b000];

const iterations = 16;
const defaultAxiom = 0b00010011011111000100110111110001;

// 65536; // 0b00000000000000010000000000000000

// TODO: add mirror and complement features

type Props = {
  rule: number;
};

export default function Automaton({ rule: _rule }: Props) {
  const [rule, setRule] = useState(_rule);

  const [axiom, setAxiom] = useState(defaultAxiom); // TODO: setAxiom

  const productions = useMemo(() => {
    const result = [];
    let iteration = axiom;

    for (const _ of range(iterations)) {
      result.push(iteration);
      iteration = produce(iteration, rule);
    }

    return result;
  }, [rule, axiom]);

  function handlePatternChange(i: number) {
    // This flips the ith bit
    setRule((oldRule) => {
      const seven = ruleLength - 1;
      const mask = 2 ** (seven - i); // TODO: add endianness utils
      return oldRule ^ mask;
    });
  }

  function handleAxiomChange(i: number) {
    console.log({ i });
    // This flips the ith bit
    setAxiom((oldAxiom) => {
      const x = axiomLength - 1;
      const mask = 2 ** (x - i); // TODO: add endianness utils
      console.log({ mask });
      return oldAxiom ^ mask;
    });
  }

  return (
    <>
      <div>Rule {rule}</div>

      <table border={0}>
        <thead>
          <tr>
            {patterns.map((axiom, i) => {
              return (
                <td colSpan={Math.ceil(axiomLength / ruleLength)} key={i}>
                  <Pattern
                    axiom={axiom}
                    active={isRuleActive(i, rule)}
                    onChange={() => handlePatternChange(i)}
                  />
                </td>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {productions.map((production, i) => {
            return (
              <tr key={i}>
                {bitmaskToBoolVec(production, axiomLength).map((active, j) => {
                  return (
                    <td key={j}>
                      <button
                        type="button"
                        onClick={() => handleAxiomChange(j)}
                      >
                        {cell(active)}
                      </button>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
