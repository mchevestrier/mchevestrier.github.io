type Props = {
  children: React.ReactNode;
};

export default function Main({ children }: Props) {
  return <div className="p-4 grid grid-cols-1 lg:grid-cols-2">{children}</div>;
}
