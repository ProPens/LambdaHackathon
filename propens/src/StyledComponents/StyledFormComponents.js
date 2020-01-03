import {styled} from '@material-ui/core/styles';
import { Container, Box, TextField} from '@material-ui/core';


export const FormContainer = styled(Container)({
    width: '80%',
    margin: '0 auto',
    padding: '10px'
});

export const FormHeading = styled('h1')({
    width: '80%',
    margin: '20px auto',
    padding: '10px 0',
    textAlign: 'center'
});

export const FormBox = styled(Box)({
    display: 'flex',
    width: '80%',
    margin: '20px auto',
    justifyContent: 'center'
})

export const Form = styled('form')({
    width: '80%', 
    border: '1px solid green'
})

export const FormInputDiv = styled('div')({
    width: '100%'
})