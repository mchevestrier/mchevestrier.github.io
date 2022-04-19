export default function Main({ children }) {
  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-2" style={{ gridTemplateRows: 'masonry' }}>
      { children }
    </div>
  );
}
