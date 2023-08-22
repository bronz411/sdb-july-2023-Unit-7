import {jobs} from "../../data/job-data"
import JobTable from "./JobTable";

const JobIndex = (props) => {
    return ( <>
    {/* <h2>Hello From Job Index</h2> */}
    <JobTable jobs={jobs} title="All Jobs"/>
    </> );
}
 
export default JobIndex;