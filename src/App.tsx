import React, {} from 'react';
import './App.css';

export function App() {
    return (
        <div>This is App component</div>
    );
}

export function Rating() {
    return <div>
        <div>star</div>
        <div>star</div>
        <div>star</div>
        <div>star</div>
        <div>star</div>
    </div>
}

export function Accordion(){
    return <div>
        <h3>Меню</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}