import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

export function App() {
    return (
        <div className={'App'}>
            <OnOff/>
            {/*<PageTitle title = {"Hello!"}/>*/}
            {/*<Rating value = {3}/>*/}
            {/*<Accordion titleValue = {"Menu1"} collapsed={true}/>*/}
            {/*<Accordion titleValue = {"Users123"} collapsed={false}/>*/}
            {/*<Rating value = {4}/>*/}
            <UncontrolledAccordion titleValue={'--MENU--'}/>
            <UncontrolledRating />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

// export function PageTitle(props: PageTitlePropsType) {
//     return <h1>{props.title}</h1>
// }
//
