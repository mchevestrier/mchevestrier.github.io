import type { HTMLAttributes } from "react";

export default interface HeadingProps
  extends Partial<HTMLAttributes<HTMLHeadingElement>> {
  children?: React.ReactNode;
}
