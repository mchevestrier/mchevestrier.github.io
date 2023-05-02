import type HeadingProps from "types/heading-props";

export default function H3(props: HeadingProps) {
  // eslint-disable-next-line jsx-a11y/heading-has-content, react/jsx-props-no-spreading
  return (
    <h3 {...props} className="text-xl text-white text-center font-bold py-4" />
  );
}
