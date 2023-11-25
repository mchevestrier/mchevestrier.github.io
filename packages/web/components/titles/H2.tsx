import type HeadingProps from "types/heading-props";

export default function H2(props: HeadingProps) {
  // eslint-disable-next-line jsx-a11y/heading-has-content, react/jsx-props-no-spreading
  return (
    <h2 {...props} className="text-2xl text-white text-center font-bold py-4" />
  );
}
