import { TextField, Box, Container,Button,Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
    size: {
        width:'22rem'
    },
    paSize:
    {
        width: '30rem',
        padding: '1rem',
        margin:'auto'
    }
}))
const Convert = () => {

    const cla = useStyles();

    const [rup, setRup] = useState(0);
    const [doll, setdoll] = useState(0);
    const [status, setStatus] = useState(false);

    const handleSubmit = () => {
        const finalVa = Math.round(rup / 74.5);
        setdoll(finalVa);
        setStatus(true);
    }
    return (<>
        <Container>
            <Box m={3}>
                <TextField className={cla.size} onChange={(e)=>{setRup(e.target.value)}} label="Amount" variant="outlined" placeholder="Enter Amount"/>
            </Box>
            <Box m={3}>
                <Button color="primary" onClick={handleSubmit} variant="contained">Calculate</Button>
            </Box>
            {
                status?
                <Box m={3}>
                    <Paper elevation={3} className={cla.paSize}>
                        <h1>{rup} INR is Equal in $  {doll}</h1>
                    </Paper>
                </Box>:""
            }
        </Container>
    </>)
}

export default Convert;