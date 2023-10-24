import React, {} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

export function App() {
    return (
        <div>
            <PageTitle title={"This is app component"}/>
            <PageTitle title={"My Friends"}/>
            <Rating value={3}/>
            <Accordion title={"123"}/>
            <Rating value={4}/>
        </div>
    );
}
type PageTitlePropsType = {
    title: string
}
export function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


