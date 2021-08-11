import React from 'react'
import WorkBlade from './testResult/WorkBlade'

const WorkerResult = () => {
    const workerResult = JSON.parse(localStorage.getItem('workerResult'));
    let workScore = workerResult[workerResult.length - 3][0].value * workerResult[workerResult.length - 2][0].value;
    const classify = (score) => {
        if (score >= 4) {
            return 'monkey';
        } else if (score < 4) {
            return 'goat';
        }
    }
    
    return (
        <>
            <WorkBlade
                type={classify(workScore)}
            />   
        </>
    )
}

export default WorkerResult
