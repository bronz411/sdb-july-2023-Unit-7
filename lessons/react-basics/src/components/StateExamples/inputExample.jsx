import React, { useState } from 'react';

const InputExample = (props) => {
    const [inputValue, setInputValue] = useState("");
    function handleClick(){
        console.log("button was clicked")
    }
    function handleClickFill(){
        setInputValue ("Hello World")
    }
    return ( <>
    <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/> 
    <button onClick={handleClick}>Click me</button>
    <button onClick={handleClickFill}>Click Me To Fill In Input Field</button>
    </>);
}
 
export default InputExample;