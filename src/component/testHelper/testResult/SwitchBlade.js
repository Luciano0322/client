import { Box, Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import RadarChart from '../../RadarChart';
import bearImg from '../../../images/bear.svg'
import buddhaImg from '../../../images/buddha.svg'
import catImg from '../../../images/cat.svg'
import eagleImg from '../../../images/eagle.svg'
import horesImg from '../../../images/hores.svg'
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
    buddha: {
        background: 'linear-gradient(90deg, #E7BDB1 0%, #E2787C 100%)',
    },
    eagle: {
        background: 'linear-gradient(90deg, #B1C7E7 0%, #789CE2 100%)',
    },
    bear: {
        background: 'linear-gradient(90deg, #E7B7B1 0%, #E29F78 100%)',
    },
    hores: {
        background: 'linear-gradient(90deg, #DCE7B1 0%, #B4E278 100%)',
    },
    cat: {
        background: 'linear-gradient(90deg, #B1D0E7 0%, #78DCE2 100%)',
    },
    typeTitle: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
}));

const SwitchBlade = ({type, arrRadar}) => {
    const classes = useStyles();
    console.log(type);
    return (
        <Box
            width={1}
            className={`
                ${classes.rootBox}
                ${type==='eagle' && classes.eagle}
                ${type==='buddha' && classes.buddha}
                ${type==='bear' && classes.bear}
                ${type==='hores' && classes.hores}
                ${type==='cat' && classes.cat}
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
                                        ${type==='eagle' && classes.eagle}
                                        ${type==='buddha' && classes.buddha}
                                        ${type==='bear' && classes.bear}
                                        ${type==='hores' && classes.hores}
                                        ${type==='cat' && classes.cat}
                                    `} 
                                >
                                    {type==='eagle' && '鷹系經營者'}
                                    {type==='buddha' && '佛系經營者'}
                                    {type==='bear' && '熊系經營者'}
                                    {type==='hores' && '馬系經營者'}
                                    {type==='cat' && '貓系經營者'}
                                </Typography>
                            </Box>
                            <Box my={3} pt={2}>
                                {type==='eagle' && <img src={eagleImg} />}
                                {type==='buddha' && <img src={buddhaImg} />}
                                {type==='bear' && <img src={bearImg} />}
                                {type==='hores' && <img src={horesImg} />}
                                {type==='cat' && <img src={catImg} />}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <RadarChart arrData={arrRadar}/>
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

export default SwitchBlade 
