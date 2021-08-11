import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import monkeyImg from '../../../images/monkey.svg'
import goatImg from '../../../images/goat.svg'
import { FacebookShareButton, FacebookIcon, LineShareButton, LineIcon, } from 'react-share'

const useStyles = makeStyles((theme) => ({
    rootBox: {
        position: 'relative',
        minHeight: '100vh',
        zIndex: -1,
    },
    wrapperBox: {
        position: 'absolute',
        minHeight: '100vh',
        clipPath: 'polygon(0 1%, 100% 0, 100% 55%, 77% 85%, 25% 69%, 0 94%)',
        background: '#FFF',
        top: 0,
        left: 0,
        zIndex: -1,
    },
    monkey: {
        background: 'linear-gradient(90deg, #B1E7E4 0%, #78E2DD 100%)',
    },
    goat: {
        background: 'linear-gradient(90deg, #E8BFB3 0%, #E3AC7A 100%)',
    },
    typeTitle: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
}));

const WorkBlade = ({type}) => {
    const classes = useStyles();
    console.log(type);
    return (
        <Box
            width={1}
            className={`
                ${classes.rootBox}
                ${type==='monkey' && classes.monkey}
                ${type==='goat' && classes.goat}
            `}
            p={1}
        >
            <Box
                className={classes.wrapperBox}
                width={1}
            >
            </Box>
            <Container>
                <Grid container spacing={2} style={{paddingTop: '5rem'}}>
                    <Box display="flex" my={3} width={1}>
                        <Typography
                            variant="h5"
                        >
                            你的評估類型是 : 
                        </Typography>
                    </Box>
                    <Grid item md={6}>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <Box my={3}>
                                <Typography 
                                    variant="h3"
                                    className={`
                                        ${classes.typeTitle}
                                        ${type==='monkey' && classes.monkey}
                                        ${type==='goat' && classes.goat}
                                    `} 
                                >
                                    {type==='monkey' && '猴系員工'}
                                    {type==='goat' && '羊系員工'}
                                </Typography>
                            </Box>
                            <Box my={3} pt={2}>
                                {type==='monkey' && <img src={monkeyImg} alt="" />}
                                {type==='goat' && <img src={goatImg} alt="" />}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Typography>
                                文字區塊
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box
                    display="flex"
                    width={1}
                    alignItems="center"
                    my={3}
                    px={5}
                >
                    <Box mx={2}>
                        <Typography variant="h5" style={{color: '#fff',}}>
                            分享
                        </Typography>
                    </Box>
                    <Box mx={2}>
                        <FacebookShareButton>
                            <FacebookIcon
                                size={64}
                                round={true}
                                iconFillColor="blue"
                                bgStyle={{fill: '#fff'}}
                                style={{boxShadow: '2px 2px 8px #777', borderRadius: '50%'}}
                            />
                        </FacebookShareButton>
                    </Box>
                    <Box mx={2}>
                        <LineShareButton>
                            <LineIcon
                                size={64}
                                round={true}
                                iconFillColor="green"
                                bgStyle={{fill: '#fff'}}
                                style={{boxShadow: '2px 2px 8px #777', borderRadius: '50%'}}
                            />
                        </LineShareButton>
                    </Box>
                </Box>
            </Container>
            
        </Box>
    )
}

export default WorkBlade
