import React, {useMemo, useState} from "react";

// export const UsersSecret = (props: {users: Array<string>}) => {
//     console.log("Users secret")
//     return <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
// }



export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React','JS','CSS', 'HTML'])

    const newArray = useMemo(()=>{
        return books.filter(book=>book.toLowerCase().indexOf("a")>-1)
    },[books])

    const addBook = ()=> {
        const newUsers = [...books, "Angular" + new Date().getTime()];
        setBooks(newUsers);
    }
    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={()=>addBook()}>add book</button>
        {counter}
        <Book books={newArray}/>
    </>
}

export const BooksSecret = (props: {books: Array<string>}) => {
    console.log("Books secret")
    return <div>{props.books.map((book,i) => <div key={i}>{book}</div>)}</div>
}

export const Book = React.memo(BooksSecret);