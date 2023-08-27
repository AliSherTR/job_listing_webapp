import FilterTag from "../../ui/FilterTag";
import Tag from "../../ui/Tag";
export default function JobItem({ job, onAddFilter }) {
    return (
        <div
            className={`bg-white flex gap-3 flex-col items-start justify-between px-7 py-7 text-sm mb-12 mt-4 shadow-lg rounded-md md:flex-row  md:items-center  ${
                job.featured === true
                    ? " border-s-4 border-3 border-green-500 "
                    : ""
            }`}
        >
            <div className="md:grid gap-2 flex flex-col ">
                <img
                    src={job.logo}
                    alt=""
                    className="row-start-1 row-end-4 translate-y-[-4rem] w-20 md:translate-y-0 md:w-full "
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
            <div className="flex gap-3 flex-wrap">
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
