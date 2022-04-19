// https://github.com/vercel/next.js/discussions/19065
import NextImage from 'next/image';

// opt-out of image optimization, no-op
const customLoader = ({ src }) => src;

export default function Image({
  src, height, width, alt, className,
}) {
  return (
    <NextImage
      src={src}
      height={height}
      width={width}
      alt={alt}
      className={className}
      loader={customLoader}
    />
  );
}
