import React, {useEffect, useMemo, useState} from "react";



export const SimpleExample = () => {
    const [counter, setCounter] = useState(1);

    console.log("SimpleExample");

    useEffect(()=>{
        console.log("useEffect");
        document.title = counter.toString();
    })

    return <>
        Hello,{counter}
        <button onClick={()=>setCounter(counter+1)}>+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log("SimpleExample");

    useEffect(()=>{
        console.log("useEffect");
        document.title = counter.toString();
    })

    setTimeout(()=>{
        document.title=counter.toString();
    })

    return <>
        Hello,{counter}
        <button onClick={()=>setFake(fake+1)}>fake+</button>
        <button onClick={()=>setCounter(counter+1)}>counter+</button>
    </>
}