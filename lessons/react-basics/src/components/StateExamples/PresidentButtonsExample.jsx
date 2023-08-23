import React, { useState } from 'react';
import DisplayTable from '../Presidents/DisplayTable';
import {presidents} from '../../data/presidents-data'

const PresidentButtonsExample = (props) => {
    const [presidentsDisplay, setpresidentsDisplay] = useState(presidents);
    const [title, settitle] = useState("All Presidents");

    function showAllPresidents(){
        setpresidentsDisplay(presidents)
        settitle("All Presidents")
    }
    function deadPresidents(){
        let deadPresidents = presidents.filter((president)=> president.passed)
        setpresidentsDisplay(deadPresidents)
        settitle("Dead Presidents")
    }
    function livingPresidents(){
        let livingPresidents = presidents.filter((president)=> !president.passed)
        setpresidentsDisplay(livingPresidents)
        settitle("Living Presidents")
    }
    return ( <>
    <button onClick={showAllPresidents}>All US Presidents</button>
    <button onClick={deadPresidents}>Dead US Presidents</button>
    <button onClick={livingPresidents}>Alive US Presidents</button>
    <DisplayTable presidents={presidentsDisplay} title={title}/>
    </> );
}
 
export default PresidentButtonsExample;