import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    cardTitleBg: {
        width: '100%',
        background: 'linear-gradient(90deg, #F2F2F2 0%, #FFFFFF 100%)',
        borderRadius: '20px 20px 0 0',
        boxShadow: 'inset 5px 2px 5px #fff',
    },
    listBg: {
        background: 'linear-gradient(215deg, #F2F2F2 0%, #FFFFFF 100%)',
        width: '100%',
    },
    colorBgText: {
        maxWidth: 200,
        color: '#FFF',
    }
}))

const Cardopt = ({text, data, colorBg, address}) => {
    const classes = useStyles();
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box py={5} className={classes.cardTitleBg}>
                <Typography variant="h5" className={text} align="center">{data.title}</Typography>
            </Box>
            {data.lines.map(e => (
                <Box key={e.id} py={2} className={classes.listBg}>
                    <Typography color="textSecondary" align="center">{e.desc}</Typography>
                </Box>
            ))}
            <Box p={2} className={colorBg}>
                <Typography
                    variant="h5"
                    className={classes.colorBgText}
                    align="center"
                >
                    {data.bg_text}
                </Typography>
            </Box>
            <Button
                className={text}
                fullWidth
                style={{padding: '.5rem', }}
                component={Link}
                to={address}
            >
                GO
            </Button>
            
        </Box>
    )
}

export default Cardopt
