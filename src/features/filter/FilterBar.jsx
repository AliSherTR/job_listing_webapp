import FilterItem from "./FilterItem";

export default function FilterBar({ data, onClearFilter, onRemoveFilterItem }) {
    if (!data.length) return;
    return (
        <div className=" max-w-screen-lg m-auto py-3 bg-[#eef6f6] flex justify-between px-10 translate-y-[-2rem] rounded-lg shadow-xl text-sm">
            <div className="flex gap-2 flex-wrap ">
                {data.map((job, i) => (
                    <FilterItem
                        key={i}
                        item={job}
                        id={i}
                        onRemoveFilterItem={onRemoveFilterItem}
                    />
                ))}
            </div>
            <button
                className="cursor-pointer text-[#2c3a3a] rounded-lg hover:underline transition-all duration-300 ease-in-out"
                onClick={onClearFilter}
            >
                Clear
            </button>
        </div>
    );
}
