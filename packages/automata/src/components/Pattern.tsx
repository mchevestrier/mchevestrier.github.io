import bitmaskToBoolVec from "../utils/bitmaskToBoolVec";
import cell from "../utils/cell";
import { patternLength } from "../utils/constants";

type Props = {
  axiom: number;
  active: boolean;
  onChange: () => void;
}

export default function Pattern({axiom, active, onChange}: Props) {
  return (
    <>
      {bitmaskToBoolVec(axiom, patternLength).map(cell)}<br />
      <button type="button" onClick={() => onChange()}>{cell(active)}</button>
    </>
  )
}