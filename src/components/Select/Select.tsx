import React, {ChangeEvent, useState} from "react";

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

export function Select (props: SelectPropsType) {
    const [collapsed, setCollapsed] = useState(false);
    const [value, setValue] = useState<string>(props.value);

    const onChangeCollapsed = () =>{ setCollapsed(!collapsed) }
    const onBlurCollapsed = () =>{
        setCollapsed(true);
        onChangeCollapsed();
    }

    return (
        <div>
            <div className={"SelectCursor"} onClick={onChangeCollapsed} onBlur={onBlurCollapsed}>
                {props.items.find((i) => value === i.title)?.title}
            </div>
            {collapsed && <div className={"SelectCursor"}>{props.items.map(i => <div onClick={()=>{setValue(i.title); onChangeCollapsed()}}>{i.title}</div>)}</div>}
        </div>
    )
}
