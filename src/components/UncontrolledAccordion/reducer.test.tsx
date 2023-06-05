import {reducer, StateType} from "./reducer";

test('collapsed should be true',()=>{
    const state: StateType = {
        collapsed: false
    }
    reducer(state, {type:"TOGGLE-COLLAPSED"})
    expect(state).toBeTruthy();
})
