import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {ControlledCheckbox, ControlledInput, ControlledSelect} from "./components/Inputs/ControlledInput";
import {UncontrolledInput} from "./components/Inputs/UncontrolledInput";
import {Select} from "./components/Select/Select";
import {Select2} from "./components/Select/Select2";
import {Example1, NewMessagesCounter, Users} from "./testDirectory/ReactMemo";
import {LikeUseCallback} from "./testDirectory/UseMemo";
// import {DifficultCountingExample, HelpsToReactMemo} from "./testDirectory/UseMemo";

export function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);
    const [value, setValue] = useState('2');


    const onClickCallback = () => {
        alert("some item was clicked")
    }
    return (
        <div className={'App'}>
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            {/*/!*<PageTitle title = {"Hello!"}/>*!/*/}
            {/*/!*<Rating value = {3}/>*!/*/}
            {/*<Accordion titleValue={"Menu1"}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={() => {*/}
            {/*               setAccordionCollapsed(!accordionCollapsed)*/}
            {/*           }}*/}
            {/*           items={[{title: "Ivan1", value: 1}, {title: "Ivan2", value: 2}, {*/}
            {/*               title: "Ivan3",*/}
            {/*               value: 3*/}
            {/*           }, {title: "Ivan4", value: 4}]}*/}
            {/*           onClick={onClickCallback}*/}
            {/*/>*/}
            {/*/!*<Accordion titleValue = {"Users123"} collapsed={false}/>*!/*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*/!*<UncontrolledAccordion titleValue={'--MENU--'}/>*!/*/}
            {/*/!*<UncontrolledRating />*!/*/}
            {/*/!*<ControlledInput/>*!/*/}
            {/*<ControlledSelect/>*/}
            {/*<Select2*/}
            {/*    value={value}*/}
            {/*    onChange={setValue}*/}
            {/*    items={[*/}
            {/*    {title: "Minsk", value: "1"},*/}
            {/*    {title: "Moscow", value: "2"},*/}
            {/*    {title: "Kiev", value: "3"},*/}
            {/*]}/>*/}
            {/*<ControlledCheckbox/>*/}
            {/*<Example1/>*/}
            {/*<LikeUseCallback/>*/}
            <Example1/>
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
