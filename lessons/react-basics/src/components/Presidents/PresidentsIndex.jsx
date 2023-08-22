import { presidents } from "../../data/presidents-data";
import DisplayTable from "./DisplayTable"

const PresidentsIndex = (props) => {
    let deadPresidents = presidents.filter((president)=> president.passed)
    let livingPresidents = presidents.filter((president)=> !president.passed)
    return ( 
    <>
    {/* <h2>Hello from PresidentIndex</h2> */}
    <DisplayTable presidents={presidents} title={"All Presidents"}/>
    <DisplayTable presidents={deadPresidents} title="Dead Presidents"/>
    <DisplayTable presidents={livingPresidents} title="Living Presidents" />
    </> 
    );
}
 
export default PresidentsIndex;