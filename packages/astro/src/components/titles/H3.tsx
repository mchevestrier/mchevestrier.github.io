import type HeadingProps from "@/types/heading-props";

export default function H3(props: HeadingProps) {
  return (
    <h3 {...props} className="text-xl text-white text-center font-bold py-4" />
  );
}
