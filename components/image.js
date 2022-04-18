// https://github.com/vercel/next.js/discussions/19065
import NextImage from "next/image";

// opt-out of image optimization, no-op
const customLoader = ({ src, width, height }) => {
  return src
}

export default function Image(props) {
  return (
    <NextImage
      {...props}
      loader={customLoader}
    />
  );
}