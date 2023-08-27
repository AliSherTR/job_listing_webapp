import FilterTag from "../../ui/FilterTag";
import Tag from "../../ui/Tag";
export default function JobItem({ job, onAddFilter }) {
    return (
        <div
            className={`bg-white flex justify-between items-center px-7 py-7 text-sm mb-4 shadow-lg rounded-md ${
                job.featured === true
                    ? " border-s-4 border-3 border-green-500 "
                    : ""
            }`}
        >
            <div className="grid gap-2 ">
                <img
                    src={job.logo}
                    alt=""
                    className="w-full row-start-1 row-end-4"
                />
                <div className="col-start-2 col-end-2 flex items-center gap-1">
                    <span className="me-2 text-[#7b8e8e] font-bold text-base">
                        {job.company}
                    </span>
                    {job.featured && <Tag tag="featured" />}
                    {job.new && <Tag tag="new" />}
                </div>
                <h1 className="col-start-2 col-end-2 col font-bold text-base cursor-pointer">
                    {job.position}
                </h1>
                <div className="col-start-2 col-end-2 font-bold ">
                    <ul className="flex gap-3 ">
                        <li className="text-sm text-[#707979]">
                            <span>{job.postedAt}</span>
                        </li>
                        <li className="text-sm text-[#707979]">
                            <span>{job.level}</span>
                        </li>
                        <li className="text-sm text-[#707979]">
                            <span>{job.location}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-3">
                {job.languages.map((language, index) => (
                    <FilterTag
                        tagName={language}
                        key={index}
                        onAddFilter={onAddFilter}
                    />
                ))}
                {job.tools.map((tool, i) => (
                    <FilterTag
                        tagName={tool}
                        key={i}
                        onAddFilter={onAddFilter}
                    />
                ))}
                <FilterTag tagName={job.level} onAddFilter={onAddFilter} />
                <FilterTag tagName={job.role} onAddFilter={onAddFilter} />
            </div>
        </div>
    );
}
