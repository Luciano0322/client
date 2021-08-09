import React, { useEffect, useReducer, useState } from 'react'
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
    console.log(state);
    const [display, setDisplay] = useState(1);
    const countArr = state.map(question => question.options.filter(e => e.checked));
    // let digitalArr = countArr[countArr.length - 1];
    // let salePartA = countArr[countArr.length - 5];
    // let salePartB = countArr[countArr.length - 4];
    // let marketC = countArr[countArr.length - 8];
    // let marketD = countArr[countArr.length - 7];
    // let operationB = countArr[countArr.length - 9];
    // let operationI = countArr[countArr.length - 2];
    // let memberE = countArr[countArr.length - 6];
    // const mutiArrSum = (arr) => {
    //     let sum = 0;
    //     for(let i=0; i < arr.length; i++) {
    //         sum += arr[i].value;
    //     };
    //     return sum;
    // }
    // let digitalSum = mutiArrSum(digitalArr); // 數位化
    // let saleSum = salePartA[0].value + salePartB[0].value; // 行銷
    // let marketCSum = mutiArrSum(marketC);
    // let marketSum = marketCSum / marketC.length * marketD[0].value; // 市場
    // let operationBSum = mutiArrSum(operationB);
    // let operationSum = operationBSum * operationI[0].value; // 營運
    // let memberSum = marketD[0].value * memberE[0].value;

    // const radarDigital = (digital) => {
    //     let datas = [];
    //     switch(digital){
    //         case 1:
    //             return datas.concat({digital: 20})
    //         case 2:
    //             return datas.concat({digital: 40})
    //         case 3:
    //             return datas.concat({digital: 60})
    //         case 4:
    //             return datas.concat({digital: 80})
    //         case digital >= 5:
    //             return datas.concat({digital: 100})
    //     }
    //     return datas;
    // }
    // const radarSale = (sale) => {
    //     let datas = [];
    //     switch(sale){
    //         case sale <=2:
    //             return datas.concat({sale: 20})
    //         case sale > 2 && sale <= 4:
    //             return datas.concat({sale: 40})
    //         case sale > 4 && sale <= 6:
    //             return datas.concat({sale: 60})
    //         case sale > 6 && sale <= 8:
    //             return datas.concat({sale: 80})
    //         case sale > 8:
    //             return datas.concat({sale: 100})
    //     }
    //     return datas;
    // }
    // const radarMarket = (market) => {
    //     let datas = [];
    //     switch(market){
    //         case market <=5:
    //             return datas.concat({market: 20})
    //         case market > 5 && market <= 10:
    //             return datas.concat({market: 40})
    //         case market > 10 && market <= 15:
    //             return datas.concat({market: 60})
    //         case market > 15 && market <= 20:
    //             return datas.concat({market: 80})
    //         case market > 20:
    //             return datas.concat({market: 100})
    //     }
    //     return datas;
    // }
    // const radarOperation = (operation) => {
    //     let datas = [];
    //     switch(operation){
    //         case operation <=3:
    //             return datas.concat({operation: 20})
    //         case operation > 3 && operation <= 6:
    //             return datas.concat({operation: 40})
    //         case operation > 6 && operation <= 9:
    //             return datas.concat({operation: 60})
    //         case operation > 9 && operation <= 12:
    //             return datas.concat({operation: 80})
    //         case operation > 12:
    //             return datas.concat({operation: 100})
    //     }
    //     return datas;
    // }
    // const radarMember = (member) => {
    //     let datas = [];
    //     switch(member){
    //         case member <=6:
    //             return datas.concat({member: 20})
    //         case member > 6 && member <= 12:
    //             return datas.concat({member: 40})
    //         case member > 12 && member <= 18:
    //             return datas.concat({member: 60})
    //         case member > 18 && member <= 24:
    //             return datas.concat({member: 80})
    //         case member > 24:
    //             return datas.concat({member: 100})
    //     }
    //     return datas;
    // }

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
