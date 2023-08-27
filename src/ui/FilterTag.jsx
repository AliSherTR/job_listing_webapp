export default function FilterTag({ tagName, onAddFilter }) {
    return (
        <button
            onClick={() => onAddFilter(tagName)}
            className="py-1 px-3 rounded-lg font-semibold text-[#506969] bg-[#eef6f6]  hover:text-white hover:bg-[#2c3a3a] transition-all duration-150 ease-linear"
        >
            {tagName}
        </button>
    );
}
