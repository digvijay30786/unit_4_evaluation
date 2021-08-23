import { TextField, Box, Container,Button,Paper,Grid,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import axios from 'axios';
const useStyle = makeStyles((them) => ({
    formCha:
    {
        height: '30rem',
       width:'25rem' 
    }
}))
const AcceptForm = () =>
{
    const [data, setData] = useState({});

    const handleValue = (e) => {
        
        const { name, value } = e.target;
        const va = {
         [name]:value,
     }
        setData({ ...data,[name]:value});
        console.log(data);
    }


    const handleSubmit = () => {
        axios.post('http://localhost:3001/book', data).then(() => {
            alert('done');
        }).catch((err) => {
            alert('faliure');
        })
    }
    const style = useStyle();
    return (<Container maxWidth='sm'>
            <Box m={4}>
               <Paper elevation={3} className={style.formCha}>
                <Box m={3} p={2}>
                    <TextField variant="outlined" name="Name" onChange={handleValue} label='Name' size='small' style={{ width: '20rem', margin:'auto'}}/>
                </Box>

                <Box m={3} p={2}>
                    <TextField variant="outlined" name="Phone" onChange={handleValue} type='number' label='Phone Number' size='small' style={{ width: '20rem', margin:'auto'}}/>
                </Box>

                <Box m={3} p={2}>
                    <TextField variant="outlined" name="DOB" onSelect={handleValue} type='date' InputLabelProps={{
      shrink: true,
    }}  label='Date Of Birth' size='small' style={{ width: '20rem', margin:'auto'}}/>
                </Box>

                <Box m={3} p={2}>
                    <TextField variant="outlined" name="SDate" type='date' onSelect={handleValue} label='Start Date' InputLabelProps={{
      shrink: true,
    }}  size='small' style={{ width: '20rem', margin:'auto'}}/>
                </Box>

                <Box m={3} p={2}>
                    <TextField variant="outlined" name="EDate" onSelect={handleValue} InputLabelProps={{
      shrink: true,
    }} type='date' label='End Date'  size='small' style={{ width: '20rem', margin:'auto'}}/>
                </Box>

                <Box m={3} p={2} style={{textAlign:'center'}}>
                    <Button variant='contained' onClick={handleSubmit}>Save Data</Button>
                </Box>

                </Paper>
            </Box>
    </Container>)
}

export default AcceptForm;