import { Box, Button, Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

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

const MutiOpt = ({
    id,
    title,
    muti,
    opts,
    dispatch,
    display,
    onChange,
    arrlength,
    countArr
}) => {
    const classes = useStyles();
    const randomBgL = Math.floor(Math.random() * 360);
    const randomBgR = Math.floor(Math.random() * 360);
    let history = useHistory();

    const nxtChange = e => {
        if(opts.find(e=>e.checked) !== undefined){
            if(arrlength > id){
                onChange(id+1)
            } else if(arrlength === id) {
                if(countArr.length > 3) {
                    localStorage.setItem('operatorResult', JSON.stringify(countArr))
                    history.push('/operatorResult')
                } else {
                    localStorage.setItem('workerResult', JSON.stringify(countArr))
                    history.push('/workerResult')
                }
            }
        } else {
            alert('請選擇選項')
        }
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={1}
            pt={10}
            style={id===display ? 
                {background: `linear-gradient(90deg, hsl(${randomBgL}, 98%, 75%) 0%, hsl(${randomBgR}, 70%, 69%) 100%)`, minHeight: '100vh',}
                :{display: 'none',}
            }
        >
            <Box>
                <Typography
                    variant="h5"
                    className={classes.quationTitle}
                >
                    {id}.{title}
                </Typography>
                {muti ? (
                    <FormGroup
                        style={{marginBottom: '2.5rem',}}
                    >
                        {opts.map((opt) => (
                            <FormControlLabel
                                key={opt.id}
                                control={
                                    <Checkbox
                                        style={{display: 'none'}}
                                        checked={opt.checked}
                                        onChange={(e) => dispatch({ type: `Q${id}`, arrIndex: id - 1, optsIndex: opt.id - 1, checked: e.target.checked })}
                                    />
                                }
                                label={opt.name}
                                className={opt.checked ? classes.optBtnChked : classes.optBtn}
                            />
                        ))}
                    </FormGroup>
                ) : (
                    <RadioGroup
                        aria-label="identity"
                        name="type"
                        style={{marginBottom: '2.5rem',}}
                        value={opts.find(e => e.checked) || ''}
                        onChange={e => dispatch({ type: `Q${id}`, arrIndex: id - 1, optsIndex: e.target.value - 1 })}
                    >
                        {opts.map((opt) => (
                            <FormControlLabel
                                key={opt.id}
                                control={<Radio style={{display: 'none'}}/>}
                                className={opt.checked ? classes.optBtnChked : classes.optBtn}
                                value={opt.id}
                                label={opt.name}
                            />
                        ))}
                        
                    </RadioGroup>
                )}

                <Box
                    display="flex"
                    justifyContent="center"
                    my={4}
                >
                    <Button
                        color="primary"
                        className={classes.nxtBtn}
                        onClick={nxtChange}
                    >
                        {arrlength > id && '下一步'}
                        {arrlength === id && '完成'}
                    </Button>
                </Box>


            </Box>
        </Box>
    )
}

export default MutiOpt
