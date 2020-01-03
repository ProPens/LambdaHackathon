import {styled} from '@material-ui/core/styles';
import { Container, Box, TextField, Select, FormControl, Button} from '@material-ui/core';


export const FormContainer = styled(Container)({
    width: '80%',
    margin: '0 auto',
    padding: '10px'
});

export const FormHeading = styled('h1')({
    width: '80%',
    margin: '10px auto',
    padding: '10px 0',
    textAlign: 'center'
});

export const FormBox = styled(Box)({
    display: 'flex',
    width: '80%',
    height: '449px',
    margin: '20px auto',
    justifyContent: 'center'
});

export const Form = styled('form')({
    width: '80%', 
    margin: 0,
    padding: '0px 20px'
});

export const FormInputDiv = styled('div')({
    width: '100%',
    // border: '1px solid red',
    display: 'flex',
    justifyContent: 'center'

});

export const FormInputField = styled(TextField)({
    width: '60%',
    margin: '10px 0'
});

export const FormSelectField = styled(Select)({
    width: '60%',
    margin: '10px 0'
});

export const StyledFormControl = styled(FormControl)({
    width: '60%',
    margin: '10px 0'
});

export const FormSubmitBtn = styled(Button)({
    width: '100%',
    padding: '10px 0'
});

export const FormBtnDiv  =  styled('div')({
    width: '60%',
    margin: '0 auto',
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'flex-end'
});