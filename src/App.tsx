import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

export function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);
    return (
        <div className={'App'}>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            {/*<PageTitle title = {"Hello!"}/>*/}
            {/*<Rating value = {3}/>*/}
            <Accordion titleValue = {"Menu1"}
                       collapsed={accordionCollapsed}
                       onChange={ ()=>{setAccordionCollapsed(!accordionCollapsed)} }/>
            {/*<Accordion titleValue = {"Users123"} collapsed={false}/>*/}
            <Rating value = {ratingValue} onClick={setRatingValue}/>
            {/*<UncontrolledAccordion titleValue={'--MENU--'}/>*/}
            {/*<UncontrolledRating />*/}
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
