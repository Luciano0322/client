import React from 'react'
import SwitchBlade from './testResult/SwitchBlade';

const OperatorResult = () => {
    const operatorResult = JSON.parse(localStorage.getItem('operatorResult'));

    let digitalJ = operatorResult[operatorResult.length - 1];
    let saleF = operatorResult[operatorResult.length - 5];
    let saleG = operatorResult[operatorResult.length - 4];
    let marketC = operatorResult[operatorResult.length - 8];
    let marketD = operatorResult[operatorResult.length - 7];
    let operationB = operatorResult[operatorResult.length - 9];
    let operationI = operatorResult[operatorResult.length - 2];
    let memberE = operatorResult[operatorResult.length - 6];
    const mutiArrSum = (arr) => {
        let sum = 0;
        for(let i=0; i < arr.length; i++) {
            sum += arr[i].value;
        };
        return sum;
    }
    let digitalSum = mutiArrSum(digitalJ); // 數位化
    let saleSum = saleF[0].value + saleG[0].value; // 行銷
    let marketCSum = mutiArrSum(marketC);
    let marketSum = marketCSum / marketC.length * marketD[0].value; // 市場
    let operationBSum = mutiArrSum(operationB);
    let operationSum = operationBSum * operationI[0].value; // 營運
    let memberSum = marketD[0].value * memberE[0].value; // 會員
    const radarData = (digital, sale, market, operation, member) => {
        let datas = {
            digital: '',
            sale: '',
            market: '',
            operation: '',
            member: ''
        };
        if(digital === 0) {
            datas.digital = 0
        }else if(digital === 1) {
            datas.digital = 20
        } else if(digital === 2) {
            datas.digital = 40
        } else if(digital === 3) {
            datas.digital = 60
        } else if(digital === 4) {
            datas.digital = 80
        } else if(digital >= 5) {
            datas.digital = 100
        }

        if(sale <= 2) {
            datas.sale = 20
        } else if(sale > 2 && sale <= 4) {
            datas.sale = 40
        } else if(sale > 4 && sale <= 6) {
            datas.sale = 60
        } else if(sale > 6 && sale <= 8) {
            datas.sale = 80
        } else if(sale > 8) {
            datas.sale = 100
        }

        if(market <= 5) {
            datas.market = 20
        } else if(market > 5 && market <= 10) {
            datas.market = 40
        } else if(market > 10 && market <= 15) {
            datas.market = 60
        } else if(market > 15 && market <= 20) {
            datas.market = 80
        } else if(market > 20) {
            datas.market = 100
        }

        if(operation <= 3) {
            datas.operation = 20
        } else if(operation > 3 && operation <= 6) {
            datas.operation = 40
        } else if(operation > 6 && operation <= 9) {
            datas.operation = 60
        } else if(operation > 9 && operation <= 12) {
            datas.operation = 80
        } else if(operation > 12) {
            datas.operation = 100
        }

        if(member <= 6) {
            datas.member = 20
        } else if(member > 6 && member <= 12) {
            datas.member = 40
        } else if(member > 12 && member <= 18) {
            datas.member = 60
        } else if(member > 18 && member <= 24) {
            datas.member = 80
        } else if(member > 24) {
            datas.member = 100
        }

        return datas;
    }
    const data2radar = radarData(digitalSum, saleSum, marketSum, operationSum, memberSum);
    let arrRadar = Object.values(data2radar);
    const arrSum = (arr) => {
        let sum = 0;
        for(let i=0; i < arr.length; i++) {
            sum += arr[i];
        };
        return sum;
    }

    const classify = (arr) => {
        const counter = arrSum(arr) / 5
        if(counter > 80) {
            return 'eagle';
        } else if(counter > 60 && counter <= 80) {
            return 'bear';
        } else if(counter > 40 && counter <= 60) {
            return 'hores';
        } else if(counter > 20 && counter <= 40 ) {
            return 'cat';
        } else if(counter <= 20) {
            return 'buddha';
        }
    }
    console.log(classify(arrRadar));

    return (
        <>
            <SwitchBlade
                type={classify(arrRadar)}
                arrRadar={arrRadar} 
            />

        </>
    )
}

export default OperatorResult
