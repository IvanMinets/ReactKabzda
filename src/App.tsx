import React, {} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

export function App() {
    return (
        <div>
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


