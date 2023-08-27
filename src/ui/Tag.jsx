export default function Tag({ tag }) {
    if (tag === "featured")
        return (
            <span className=" rounded-xl uppercase text-[10px] text-white px-2 bg-[#7b8e8e]">
                {tag}
            </span>
        );
    if (tag === "new") {
        return (
            <span className=" rounded-xl uppercase text-[10px] text-white px-2 bg-black">
                {tag}!
            </span>
        );
    }
}
