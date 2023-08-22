import JobRow from "./JobRow";

const JobTable = (props) => {
    let { jobs } = props
    return (
         <>
    <table style={{margin:"auto"}}>
        <tr style={{backgroundColor:"black", color: "white"}}>
            <th>ID</th>
            <th>Date Applied</th>
            <th>Company Name</th>
            <th>Title</th>
            <th>Contact</th>
            <th>Status</th>
        </tr>
        {jobs.map((job,index)=> (
        <JobRow key={index}{...job}index={index}/>
        ))}
    </table>
    </> );
}
 
export default JobTable;