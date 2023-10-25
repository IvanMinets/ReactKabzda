import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType){
    return <div>
        <AccordionTitle title ={props.title}/>
        {! props.collapsed && <AccordionBody/>}
    </div>
}
type AccordionTitlePropsType = {
    title: string
}
export function AccordionTitle (props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")
    return <h3>{props.title}</h3>
}
export function AccordionBody () {
    console.log("AccordionBody rendered")
    return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

}