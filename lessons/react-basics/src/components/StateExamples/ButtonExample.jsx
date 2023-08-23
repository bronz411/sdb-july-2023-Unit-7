import React, { useState } from 'react';

const ButtonExample = (props) => {
    //useState returns an array with two values.
    //1. current state value (is read only)
    //2. set_____ is a function to update the state value
    // useState takes one arbument, the initial value of the state.
    // updating state is asyncronous
    const [clickCount, setclickCount] = useState(0);
    // let clickCount = 0
    function handleIncreaseClick(){
        setclickCount(clickCount +1)
        // console.log(clickCount)
    }
    function handleDecreaseClick(){
        setclickCount(clickCount-1)
    }
    return ( <>
    <p>Click Count: {clickCount}</p>
    {/* when adding a function to the onClick we need to point to it, not invoke it. ie without () */}
    <button onClick={handleIncreaseClick}>Click to Increase</button>
    <button onClick={handleDecreaseClick}>Click to Decrease</button>
    </> );
}
 
export default ButtonExample;