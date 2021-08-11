import React, { useReducer, useState } from 'react'
import MutiOpt from './MutiOpt'
import { operatorSet } from './QAdata'

const reducer = (state, action) => {
    switch (action.type) {
        case "Q1":
            state[action.arrIndex].options[action.optsIndex].checked = action.checked;
            return [...state]
        case "Q2":
            state[action.arrIndex].options[action.optsIndex].checked = action.checked;
            return [...state]
        case "Q3":
            state[action.arrIndex].options.map(e => e.checked = false);
            state[action.arrIndex].options[action.optsIndex].checked = true;
            return [...state]
        case "Q4":
            state[action.arrIndex].options.map(e => e.checked = false);
            state[action.arrIndex].options[action.optsIndex].checked = true;
            return [...state]
        case "Q5":
            state[action.arrIndex].options.map(e => e.checked = false);
            state[action.arrIndex].options[action.optsIndex].checked = true;
            return [...state]
        case "Q6":
            state[action.arrIndex].options.map(e => e.checked = false);
            state[action.arrIndex].options[action.optsIndex].checked = true;
            return [...state]
        case "Q7":
            state[action.arrIndex].options.map(e => e.checked = false);
            state[action.arrIndex].options[action.optsIndex].checked = true;
            return [...state]
        case "Q8":
            state[action.arrIndex].options.map(e => e.checked = false);
            state[action.arrIndex].options[action.optsIndex].checked = true;
            return [...state]
        case "Q9":
            state[action.arrIndex].options[action.optsIndex].checked = action.checked;
            return [...state]
        default:
            return state
    }
};

const Operator = () => {
    const [state, dispatch] = useReducer(reducer, operatorSet)
    const [display, setDisplay] = useState(1);
    const countArr = state.map(question => question.options.filter(e => e.checked));

    return (
        <div>
            {state &&
                state.map((question)=>(
                    <MutiOpt 
                        key={question.id}
                        id={question.id}
                        title={question.title}
                        muti={question.muti}
                        opts={question.options}
                        dispatch={dispatch}
                        display={display}
                        onChange={setDisplay}
                        arrlength={state.length}
                        countArr={countArr}
                    />
            ))}
        </div>
    )
}

export default Operator
