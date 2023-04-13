import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <PageTitle title = {"Hello!"}/>
            <Rating value = {3}/>
            <Accordion titleValue = {"Menu1"} collapsed={true}/>
            <Accordion titleValue = {"Users"} collapsed={false}/>
            <Rating value = {4}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
