import React, {useMemo, useState} from "react";

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const newArray = useMemo(() => {
        return books.filter(book => book.toLowerCase().indexOf("a") > -1)
    }, [books])

    const addBook = () => {
        const newUsers = [...books, "Angular" + new Date().getTime()];
        setBooks(newUsers);
    }
    const memoizedAddBook = useMemo(()=> {return addBook},[books]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book books={newArray} addBook={memoizedAddBook}/>
    </>
}


type BookSecretPropsType = {
    books: Array<string>;
    addBook: () => void
}
export const BooksSecret = (props: BookSecretPropsType) => {
    console.log("Books secrets")
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {props.books.map((book, i) => <div key={i}>{book}
        </div>)}
    </div>
}

export const Book = React.memo(BooksSecret);