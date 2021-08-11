import React, { useReducer, useState } from 'react';
import MutiOpt from './MutiOpt';
import { workerSet } from './QAdata';

const reducer = (state, action) => {
    switch(action.type) {
        case 'Q1':
            state[action.arrIndex].options.map(e => e.checked = false);
            state[action.arrIndex].options[action.optsIndex].checked = true;
            return [...state]
        case 'Q2':
            state[action.arrIndex].options.map(e => e.checked = false);
            state[action.arrIndex].options[action.optsIndex].checked = true;
            return [...state]
        case 'Q3':
            state[action.arrIndex].options.map(e => e.checked = false);
            state[action.arrIndex].options[action.optsIndex].checked = true;
            return [...state]
        default:
            return state;
    }
}

const Worker = () => {
    const [state, dispatch] = useReducer(reducer, workerSet);
    const [display, setDisplay] = useState(1);
    const countArr = state.map(question => question.options.filter(e => e.checked));
    console.log(countArr);

    return (
        <div>
            {state &&
                state.map((question) => (
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
                ))
            }
        </div>
    )
}

export default Worker
