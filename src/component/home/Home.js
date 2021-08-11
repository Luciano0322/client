import { Box, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import wrapperBg from '../../images/Hero_bg.svg';
import Cardopt from './Cardopt';
import { saleller, littleHelper, operator } from './optsData';

const useStyles = makeStyles((theme) => ({
    heroWrapper: {
        height: '85vh',
        background: `url(${wrapperBg}) no-repeat center`,
        backgroundSize: 'cover',
    },
    contentWrapper: {
        border: '1px solid #fff',
        minWidth: 200,
        maxWidth: 450,
    },
    title: {
        textShadow: '-2px -2px 8px rgba(250, 251, 255, 0.2), 2px 2px 8px rgba(22, 27, 29, 0.25)',
        color: '#FFFFFF',
        letterSpacing: '.25rem',
        margin: '1.25rem',
        fontWeight: 'bold',
    },
    grow: {
        flexGrow: 1,
    },
    paper: {
        minWidth: 200,
        boxShadow: '-3px -5px 8px rgba(250, 251, 255, 0.2), 3px 5px 8px rgba(22, 27, 29, 0.15)',
        borderRadius: 20,
    },
    helperText: {
        background: '-webkit-linear-gradient(0deg, #BAF2B5, #26AAD4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold',
    },
    helperBg: {
        background: 'linear-gradient(125deg, #BAF2B5 0%, #26AAD4 97.5%)',
    },
    salellerText: {
        background: '-webkit-linear-gradient(0deg, #82E8FF, #379FFF)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold',
    },
    salellerBg: {
        background: 'linear-gradient(125deg, #82E8FF 0%, #379FFF 100%)',
    },
    operatorText: {
        background: '-webkit-linear-gradient(0deg, #FE82DB, #9678E7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold',
    },
    operatorBg: {
        background: 'linear-gradient(125deg, #FE82DB 6.1%, #9678E7 103.66%)',
    },
}))

const Home = () => {
    const classes = useStyles();
    const helperUrl = `/testEntPoint`;
    const salellerUrl = `/`;
    const operatorUrl = `/`;
    
    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                className={classes.heroWrapper}
                width={1}
            >
                <Box
                    className={classes.contentWrapper}
                    p={3}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        className={classes.title}
                    >
                        要超越對手
                    </Typography>
                    <Typography
                        variant="h4"
                        align="center"
                        className={classes.title}
                    >
                        就靠美業神隊友 !
                    </Typography>
                </Box>
            </Box>
            <Box 
                width={1}
                p={1.5}
                my={4}
            >
                {/* Grid 的 spacing*8/2 = 父層需要padding的寬度(px)，不然會跑版!! */}
                <Grid
                    container
                    justifyContent="center"
                    className={classes.grow}
                    spacing={3}
                >
                    <Grid item>
                        <Paper className={classes.paper} elevation={0} >
                            <Cardopt 
                                text={classes.helperText}
                                colorBg={classes.helperBg}
                                data={littleHelper}
                                address={helperUrl}
                            />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper} elevation={0} >
                            <Cardopt 
                                text={classes.salellerText}
                                colorBg={classes.salellerBg}
                                data={saleller}
                                address={salellerUrl}
                            />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper} elevation={0} >
                            <Cardopt 
                                text={classes.operatorText}
                                colorBg={classes.operatorBg}
                                data={operator}
                                address={operatorUrl}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            
        </>
    )
}

export default Home
