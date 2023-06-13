import React, {useEffect, useState} from 'react';
import './InteractiveClock.css'
type PropsType = {}


export const InteractiveClock: React.FC<PropsType> = (props) => {
    return (
        <div className={"clock"}>
            <div className={"analog-clock"}>
                <div className={"dial seconds"}/>
                <div className={"dial minutes"} />
                <div className={"dial hours"} />
            </div>
        </div>
    );
};
