import React from "react";

export type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            const stateCopy = {
                ...state,
                collapsed: !state.collapsed
            }
            stateCopy.collapsed = !state.collapsed
            return stateCopy;
        default:
            return state;
    }
}