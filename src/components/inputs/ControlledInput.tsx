import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';

export function ControlledInput () {
    const [parentValue, setParentValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.value)}
    return<div>
        <input value={parentValue} onChange={onChange}/>
    </div>
}


export function ControlledCheckbox () {
    const [parentValue, setParentValue] = useState(true);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.checked)}
    return<div>
        <input type={"checkbox"} checked={parentValue} onChange={onChange} />
    </div>
}

export function ControlledSelect () {
    const [parentValue, setParentValue] = useState<string | undefined>("2");
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {setParentValue(e.currentTarget.value)}
    return<div>
        <select value={parentValue} onChange={onChange}>
            <option>none</option>
            <option value="1">Minsk</option>
            <option value="2">Moscow</option>
            <option value="3">Kiev</option>
        </select>
    </div>
}