import React, {} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

export function App() {
    return (
        <div>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Accordion title={"123"} collapsed={true}/>
            <Accordion title={"1234"} collapsed={false}/>
        </div>
    );
}
type PageTitlePropsType = {
    title: string
}
export function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


