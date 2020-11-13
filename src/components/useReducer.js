import React, { useReducer } from 'react'

const reducer = (state,action) => {
    switch(action.type){
        case 'INC': return {value: state.value+1};
        case 'DEC': return {value: state.value-1};
        case 'RES': return {value: 0};
        default: return state;
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});

    return (
        <div>
            <p>
                Current counts <b>{state.value}</b>
            </p>
            <button onClick={()=> dispatch({type:"INC"})}>+1</button>
            <button onClick={()=> dispatch({type:"DEC"})}>-1</button>
            <button onClick={()=>{dispatch({type:"RES"})}}>Reset</button>
        </div>
    );
}

export default Reducer;