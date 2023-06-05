import React, {useMemo, useState} from "react";

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(()=>{
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while(fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA
    },[a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }
    return <>
        <input value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a : {resultA}
        </div>
        <div>
            Result for b : {resultB}
        </div>
    </>
}

export const UsersSecret = (props: {users: Array<string>}) => {
    console.log("Users secret")
    return <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
}

export const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Ivan','Ivan2','Ivan3'])
    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        {counter}
        <Users users={users}/>
    </>
}