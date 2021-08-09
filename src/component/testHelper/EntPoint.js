import { Box, Button, FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    quationTitle: {
        color: '#FFF',
        letterSpacing: theme.spacing(.5),
        textShadow: '-1px -2px 13px #333', 
        marginBottom: '3rem',
    },
    optBtn: {
        minWidth: 200,
        borderRadius: 50,
        background: 'linear-gradient(115.95deg, rgba(255, 255, 255, 0.7) 30.03%, rgba(255, 255, 255, 0.3) 96.4%)',
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        justifyContent: 'center',
        boxShadow: '2px 2px 8px #999',
    },
    optBtnChked: {
        minWidth: 200,
        borderRadius: 50,
        background: 'linear-gradient(175deg, #BAF2B5 0%, #26AAD4 97.5%)',
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        justifyContent: 'center',
        boxShadow: '2px 2px 3px #999',
        color: '#FFF',
    },
    nxtBtn: {
        minWidth: 120,
        padding: theme.spacing(1),
        background: 'linear-gradient(115.95deg, rgba(255, 255, 255, 0.7) 30.03%, rgba(255, 255, 255, 0.3) 96.4%)',
        boxShadow: '2px 2px 8px #999'
    }
}))

const EntPoint = () => {
    const classes = useStyles();
    const randomBgL = Math.floor(Math.random() * 360);
    const randomBgR = Math.floor(Math.random() * 360);
    const [identity, setIdentity] = useState('');

    const optChange = e => {
        console.log(e.target);
        setIdentity(e.target.value);
    };
    
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={1}
            style={{background: `linear-gradient(90deg, hsl(${randomBgL}, 98%, 75%) 0%, hsl(${randomBgR}, 70%, 69%) 100%)`, height: '100vh',}}
        >
            <Box>
                <Typography
                    variant="h5"
                    className={classes.quationTitle}
                >
                    問：你是經營者還是員工呢?
                </Typography>
                <RadioGroup
                    aria-label="identity"
                    name="type"
                    value={identity}
                    onChange={optChange}
                    style={{marginBottom: '2.5rem',}}
                >
                    <FormControlLabel
                        value="operator"
                        control={<Radio style={{display: 'none'}}/>}
                        className={identity==='operator' ? classes.optBtnChked : classes.optBtn}
                        label="經營者"
                    />
                    <FormControlLabel
                        value="worker"
                        control={<Radio style={{display: 'none'}}/>}
                        className={identity==='worker' ? classes.optBtnChked : classes.optBtn}
                        label="員工"
                    />
                </RadioGroup>
                <Box
                    display="flex"
                    justifyContent="center"
                >
                    <Button
                        color="primary"
                        className={classes.nxtBtn}
                        component={Link}
                        to={`/${identity}`}
                    >
                        下一步
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default EntPoint
