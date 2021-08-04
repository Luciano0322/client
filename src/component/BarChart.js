import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
    return (
        <div >
            <Bar
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [
                        {
                            label: '# of Votes',
                            data: [12, 19, 3, 5, 2, 3]
                        }
                    ]
                }}
                
                options={{ maintainAspectRatio: false }}
            />
            1211
        </div>
    )
}

export default BarChart
