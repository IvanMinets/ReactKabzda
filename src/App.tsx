import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {ControlledCheckbox, ControlledInput, ControlledSelect} from "./components/inputs/ControlledInput";
import {UncontrolledInput} from "./components/inputs/UncontrolledInput";

export function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);
    const onClickCallback = () => {
        alert("some item was clicked")
    }
    return (
        <div className={'App'}>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            {/*<PageTitle title = {"Hello!"}/>*/}
            {/*<Rating value = {3}/>*/}
            <Accordion titleValue={"Menu1"}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       items={[{title: "Ivan1", value: 1}, {title: "Ivan2", value: 2}, {
                           title: "Ivan3",
                           value: 3
                       }, {title: "Ivan4", value: 4}]}
                       onClick={onClickCallback}
            />
            {/*<Accordion titleValue = {"Users123"} collapsed={false}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<UncontrolledAccordion titleValue={'--MENU--'}/>*/}
            {/*<UncontrolledRating />*/}
            {/*<ControlledInput/>*/}
            {/*<ControlledSelect/>*/}
            {/*<ControlledCheckbox/>*/}
        </div>
    );
}

// type PageTitlePropsType = {
//     title: string
// }
// // export function PageTitle(props: PageTitlePropsType) {
// //     return <h1>{props.title}</h1>
// // }
// //
