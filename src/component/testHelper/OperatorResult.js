import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import RadarChart from '../RadarChart';

const useStyles = makeStyles((theme) => ({
    rootBox: {
        position: 'relative',
        minHeight: '100vh',
    },
    wrapperBox: {
        position: 'absolute',
        minHeight: '100vh',
        background: 'linear-gradient(90deg, #E7BDB1 0%, #E2787C 100%)',
        clipPath: 'polygon(22% 72%, 71% 87%, 100% 53%, 100% 100%, 0 100%, 0 96%)',
        top: 0,
        left: 0,
        zIndex: -1,
    }
}));

const OperatorResult = () => {
    const classes = useStyles();
    return (
        <Box
            width={1}
            className={classes.rootBox}
            p={1}
        >
            <Grid container spacing={2} style={{paddingTop: '5rem'}}>
                <Grid item md={6}>
                    <Box display="flex" my={3}>
                        <Typography variant="h5">
                            你的評估類型是 : 
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Typography variant="h3">
                            佛系經營者
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <RadarChart />
                    </Box>
                </Grid>

            </Grid>
            
            <Box
                className={classes.wrapperBox}
                width={1}
            >
            </Box>
        </Box>
    )
}

export default OperatorResult
