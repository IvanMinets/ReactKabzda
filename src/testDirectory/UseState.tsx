import React, {useState} from "react";


export const Example1 = () => {
    console.log("Example1")
    const [counter, setCounter] = useState(0);

    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        {counter}
    </>
}