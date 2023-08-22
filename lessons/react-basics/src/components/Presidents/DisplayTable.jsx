import DisplayRow from "./DisplayRow";
const DisplayTable = (props) => {
    let {presidents} = props
    return ( 
    <>
        <h3 style={{textAlign: "left"}}>{props.title}</h3>
            <table>
                {presidents.map((president, index)=> <DisplayRow key={index} {...president} 
                />)}
            </table>
    </> );
}
 
export default DisplayTable;