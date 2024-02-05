type Props = {
  title: string;
  span: string;
  children: React.ReactNode;
};

export default function Item({ title, span, children }: Props) {
  return (
    <div className="p-2">
      <div className="flex justify-between flex-wrap gap-1">
        <h3 className="font-bold">
          &bull;&emsp;
          {title}
        </h3>
        <div className="ml-4 flex gap-1 place-items-center italic">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <div>{span}</div>
        </div>
      </div>
      <div className="pl-4">{children}</div>
    </div>
  );
}
