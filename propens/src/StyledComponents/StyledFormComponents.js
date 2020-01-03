import {styled} from '@material-ui/core/styles';
import { Container, Box, TextField} from '@material-ui/core';


export const FormContainer = styled(Container)({
    width: '80%',
    margin: '0 auto',
    padding: '10px',
    border: '1px solid red'
});

export const FormHeading = styled('h1')({
    width: '80%',
    margin: '20px auto',
    padding: '10px 0',
    textAlign: 'center',
    color: 'red',
    border: '1px solid purple'
});

export const FormBox = styled(Box)({
    display: 'flex',
    width: '80%',
    margin: '20px auto',
    border: '1px solid blue'
})

export const Form = styled('form')({
    border: '1px solid green'
})