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

const RadarChart = ({arrData}) => {
    const data = {
        labels: ['數位化', '會員', '營運', '市場', '行銷'],
        datasets: [
            {
                label: '# 積分',
                data: arrData,
                backgroundColor: 'rgba(255, 99, 132, .8)',
                borderColor: 'rgba(255, 99, 132, .2)',
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
            style={{
                minWidth: 345,

            }}
        >
            <Radar
                data={data}
                options={options}
            />
        </Box>
    )
}

export default RadarChart
