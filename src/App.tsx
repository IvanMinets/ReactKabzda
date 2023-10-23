import React, {} from 'react';
import './App.css';

export function App() {
    return (
        <div>
            This is App component
            <Rating />
            <Accordion/>
        </div>
    );
}

export function Rating() {
    return <>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
    </>
}
export function Star ()  {
    return <div>star</div>
}

export function Accordion(){
    return <div>
        <AccordionTitle/>
        <AccordionBody/>
    </div>
}
export function AccordionTitle () {
    console.log("AccordionTitle rendered")
    return <>
        <h3>Меню</h3>
    </>
}
export function AccordionBody () {
    console.log("AccordionBody rendered")
    return <>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </>
}

