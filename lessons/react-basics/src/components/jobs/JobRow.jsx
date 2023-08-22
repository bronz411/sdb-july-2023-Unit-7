const JobRow = (props) => {
    let {id, dateApplied, companyName, JobTitle, contact, status} = props
    return ( <>
    <tr style={status== "rejected" ? {backgroundColor: "red"}: {backgroundColor: "lightgrey"}}>
        <td>{+props.index + 1}</td>
        <td>{dateApplied}</td>
        <td>{companyName}</td>
        <td>{JobTitle}</td>
        <td>{contact}</td>
        <td>{status}</td>
    </tr>
    </> );
}
 
export default JobRow;