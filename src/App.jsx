import FilterBar from "./features/filter/FilterBar";
import Header from "./ui/Header";
import Jobs from "./features/Jobs/Jobs";

import jobsData from "./data.json";
import { useState } from "react";

export default function App() {
    const [jobData, setJobData] = useState(jobsData);

    const [filterData, setFilterData] = useState([]);

    function clearFilters() {
        setFilterData([]);
    }

    function handleAddFilter(newData) {
        if (!filterData.includes(newData))
            setFilterData((prevData) => [...prevData, newData]);
    }

    // Filter the jobData based on the filterData array
    const filteredJobs = jobData.filter((job) => {
        // Check if any of the job's languages or tools match the filterData
        return (
            job.languages.some((lang) => filterData.includes(lang)) ||
            job.tools.some((tool) => filterData.includes(tool))
        );
    });

    function removeFilterItem(id) {
        setFilterData((prevFilterData) =>
            prevFilterData.filter((_, i) => i !== id)
        );
    }

    return (
        <div>
            <Header />
            <FilterBar
                data={filterData}
                onClearFilter={clearFilters}
                onRemoveFilterItem={removeFilterItem}
            />
            <Jobs
                data={jobData}
                onAddFilter={handleAddFilter}
                filteredJobs={filteredJobs}
            />
        </div>
    );
}
