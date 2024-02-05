type Props = {
  children?: React.ReactNode;
};

export default function BlockList({ children }: Props) {
  return (
    <div className="py-6 flex flex-wrap gap-3 place-items-center place-content-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {children}
      </div>
    </div>
  );
}
