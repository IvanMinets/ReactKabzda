import React, {useState} from "react";

export const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

export const UsersSecret = (props: {users: Array<string>}) => {
    console.log("Users")
    return <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
}

export const Users = React.memo(UsersSecret);

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Ivan','Ivan2','Ivan3'])
    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}