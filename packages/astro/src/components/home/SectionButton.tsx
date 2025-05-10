import cn from "classnames";

import type { PageMetadata } from "../../types/metadata";

type Props = {
  page: PageMetadata;
};

export default function SectionButton({
  page: {
    slug,
    data: { title, bgColor, icon },
  },
}: Props) {
  return (
    <a key={slug} href={`/p/${slug}`}>
      <div
        className={cn(
          "rounded-3xl sm:rounded-2xl shadow-[0_8px_20px_rgb(0,0,0,0.2)]",
          "text-center  bg-[#3d3a3d] flex max-w-full",
          "hover:scale-[1.014] transition ease-out duration-400 hover:ease-in hover:duration-150",
        )}
      >
        <div
          className={cn([
            "rounded-3xl sm:rounded-2xl shadow-[inset_-2px_-3px_1px_0_rgba(0,0,0,0.2)] cursor-pointer h-40 w-40 sm:h-52 sm:w-52",
            "max-w-full p-2 sm:p-6 md:p-8 flex place-content-center place-items-center",
          ])}
        >
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: icon }}
              className="w-16 sm:w-32 max-w-fit mx-auto"
              style={{ color: bgColor }}
            />
            <strong className="text-lg">{title}</strong>
          </div>
        </div>
      </div>
    </a>
  );
}
