import JobItem from "./JobItem";

export default function Mainlist({ data, onAddFilter, filteredJobs }) {
    if (filteredJobs.length > 0)
        return (
            <div className="max-w-screen-lg m-auto py-7 rounded-lg">
                {filteredJobs.map((data, i) => (
                    <JobItem key={i} job={data} onAddFilter={onAddFilter} />
                ))}
            </div>
        );
    return (
        <div className="max-w-screen-lg m-auto py-7 rounded-lg">
            {data.map((data) => (
                <JobItem key={data.id} job={data} onAddFilter={onAddFilter} />
            ))}
        </div>
    );
}
