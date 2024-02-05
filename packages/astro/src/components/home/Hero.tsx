import Computer from "./Computer.min.png";
import Description from "./Description";

export default function Hero() {
  return (
    <div className="px-4 py-14 w-full">
      <div className="flex flex-wrap items-stretch justify-center gap-4">
        <div className="w-full sm:w-1/2 min-h-[16rem]">
          <img
            src={Computer.src}
            height={Computer.height}
            width={Computer.width}
            alt=""
          />
        </div>

        <Description />
      </div>
    </div>
  );
}
