export default function FilterItem({ item, id, onRemoveFilterItem }) {
    console.log(item, id);
    return (
        <span className="cursor-pointer bg-[#d6e6e6] text-[#2c3a3a] ps-2 rounded-lg">
            {item}{" "}
            <button
                className="hover:bg-black hover:text-white px-3 py-1"
                onClick={() => onRemoveFilterItem(id)}
            >
                &times;
            </button>
        </span>
    );
}
