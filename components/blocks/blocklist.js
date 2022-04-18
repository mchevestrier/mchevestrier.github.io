export default function BlockList({ children }) {
    return (
        <div className="py-6 flex flex-wrap gap-3 place-items-center place-content-center">
            { children }
        </div>
    );
}