import { TextField, Box, Container,Button,Paper,Grid,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
    cont: {
        margin: '2rem',
    },
    paperCont: {
        padding: '1rem',
        height:'12rem'
    },
    sizeI: {
        width: '20rem',
        height:'13rem'
    },
    sizeII: {
        width: '30rem',
    },
    imgStyle: {
        borderRadius:'.5rem'
    },
    type: {
        marginBottom: '40px',
        display: 'flex',
        justifyContent: 'space-between',
        width:'100%'
    }
}))
const HotelBook = () =>
{
    const style = useStyle();
    return (<Container className={style.cont} maxWidth='md'>
        <Box m={2} >
            <Link to='/book' style={{textDecoration:'none'}}><Paper elevation={3} className={style.paperCont}>
                <Grid container spacing='2'>
                    <Grid item className={style.sizeI}><img src='https://imgur.com/Iotiet6.jpg' alt='book' width='100%' className={style.imgStyle} height='100%'/></Grid>
                    <Grid item className={style.sizeII}>
                        <Typography component='div' style={{marginBottom:'30px'}}>
                            <Typography component='p'>Masai School</Typography>
                            <Typography variant='h6' component='p'>Saraswati Public School</Typography>
                            <hr />
                            <Typography component='p'>4 Guest . 2 BedRooms . 3 Beds</Typography>
                        </Typography>
                        <Typography component='div'  className={style.type}>
                            <Typography component='p'>(Review : 8600)</Typography>
                            <Typography component='p'>INR <b>2199</b>/Night</Typography>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            </Link> 
        </Box>
        <Box m={2}>
            <Link to='/book' style={{textDecoration:'none'}}><Paper elevation={3} className={style.paperCont}>
                <Grid container spacing='2'>
                    <Grid item className={style.sizeI}><img src='https://imgur.com/HjE1fRk.jpg' alt='book' width='100%' className={style.imgStyle} height='100%'/></Grid>
                    <Grid item className={style.sizeII}>
                        <Typography component='div' style={{marginBottom:'30px'}}>
                            <Typography component='p'>Luxry and total A.c Rooms</Typography>
                            <Typography variant='h6' component='p'>Mascot Pecx Ramadda Resort</Typography>
                            <hr />
                            <Typography component='p'>7 Guest . 1 BedRooms . 3 Beds</Typography>
                        </Typography>
                        <Typography component='div'  className={style.type}>
                            <Typography component='p'>(Review : 860)</Typography>
                            <Typography component='p'>INR <b>5000</b>/Night</Typography>
                        </Typography>
                    </Grid>
                </Grid>
           </Paper></Link>
        </Box>
    </Container>)
}

export default HotelBook;