import DisplayRow from "./DisplayRow";
const DisplayTable = (props) => {
    let {presidents} = props
    return ( 
    <>
        <h3 style={{textAlign: "left"}}>{props.title}</h3>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Birth Year</th>
                    <th>Year Passed</th>
                    <th>Age</th>
                </tr>
                {presidents.map((president, index)=> <DisplayRow key={index} {...president} 
                />)}
            </table>
    </> );
}
 
export default DisplayTable;