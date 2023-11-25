import type HeadingProps from "types/heading-props";

export default function H1(props: HeadingProps) {
  // eslint-disable-next-line jsx-a11y/heading-has-content, react/jsx-props-no-spreading
  return (
    <h1 {...props} className="text-3xl text-white text-center font-bold pb-4 pt-12" />
  );
}
