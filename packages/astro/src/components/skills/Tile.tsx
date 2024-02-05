import cn from "classnames";

type Props = {
  name: string;
  icon: ImageMetadata;
  level?: number;
  children?: React.ReactNode;
};

export default function Tile({ name, icon, level = 0, children }: Props) {
  return (
    <div className="w-36 h-36 text-center flex flex-wrap place-items-center place-content-center">
      <div className="w-full text-center">
        {icon ? (
          <img
            src={icon.src}
            alt={name}
            className="p-2 w-auto h-16 mx-auto"
            height={icon.height}
            width={icon.width}
          />
        ) : null}
        <div className="font-bold">{name}</div>
        {typeof level !== "undefined" ? (
          <div className="flex pt-4 justify-center">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "block w-4 h-1 mx-1 rounded-full",
                    i >= level
                      ? "bg-gray-600"
                      : "bg-[#fddbff] shadow-[0_0_4px_2px_rgba(253,245,250,.4)]",
                  )}
                />
              ))}
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
}
