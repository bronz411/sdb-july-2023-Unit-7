import React, { useState } from 'react';

const TenLittleMonkeys = (props) => {
const [monkeyCount, setmonkeyCount] = useState(10);
const [monkeyPhrase, setmonkeyPhrase] = useState("");
function monkeyAround(){
    setmonkeyCount(monkeyCount -1) 
    if (monkeyCount < 1){
    setmonkeyPhrase("All the monkeys fell off")
    setmonkeyCount(0)
} else {
    setmonkeyPhrase(`${monkeyCount} little monkeys jumping on the bed, one fell off and bumped his head. Mama called the doctor and the doctor said, "No more monkeys jumping on the bed!"`)
}
}
function monkeyCleanUp(){
    setmonkeyPhrase("")
    setmonkeyCount(10)
}

    return ( <>
    {/* <h2>Monkey Count: {monkeyCount}</h2> */}
    <p>{monkeyPhrase}</p>
    <button onClick={monkeyAround}>Monkey Around</button>
    <button onClick={monkeyCleanUp}>Clean Up</button>
    </> );
}
 
export default TenLittleMonkeys;