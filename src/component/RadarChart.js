import { Box } from '@material-ui/core';
import React from 'react';
import { Radar } from 'react-chartjs-2';

const options = {
    scale: {
        ticks: {
            count: 6,
        },
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 0,
            suggestedMax: 100
        }
    },
};

const RadarChart = () => {
    const data = {
        labels: ['數位化', '會員', '營運', '市場', '行銷'],
        datasets: [
            {
                label: '# 積分',
                data: [20, 40, 60, 80, 100],
                backgroundColor: 'rgba(255, 99, 132, .8)',
                borderColor: 'rgba(255, 99, 132, .5)',
                borderWidth: 2,
            },
        ],
    };

    return (
        <Box 
            width={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Radar
                data={data}
                options={options}
            />
        </Box>
    )
}

export default RadarChart
