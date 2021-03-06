import React from 'react';
import {Link} from 'react-router-dom';
import {useFormInput} from '../../hooks/FormInput';
import {FormContainer, FormBox, FormHeading, Form, FormInputDiv, FormInputField, FormSubmitBtn, FormBtnDiv, AccountRedirectBox} from '../../StyledComponents/StyledFormComponents';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const UserLoginForm = () => {
    const dashboard = useHistory();
    const [username, setUsername] = useFormInput('');
    const [password, setPassword] =  useFormInput('');

    const getUser = (data) =>{
        axios.post('https://pro-pens.herokuapp.com/api/auth/login', data)
        .then(res => {
            localStorage.setItem('userdata', JSON.stringify({
                username: res.data.username,
                token: res.data.token
            }));
            dashboard.push('/');
        })
        .catch(err => console.log(err));
    }

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: username,
            password: password
        }
        getUser(data);
    }
    
    return(
        <FormContainer>
        <FormHeading>Sign-In</FormHeading> 
        <FormBox>
            <Form onSubmit={handleSubmit}>
        
                <FormInputDiv className="inputDiv">
                    <FormInputField type="text" name="username" value={username}  label="Username" variant="standard" required onChange={setUsername}/>
                </FormInputDiv>
                <FormInputDiv className="inputDiv">
                    <FormInputField type="password" name="password" value={password} autoComplete="current-password" label="Password" variant="standard" required onChange={setPassword} />
                </FormInputDiv>      
                <FormBtnDiv> 
                    <FormSubmitBtn type="submit" color="primary" variant="contained" size="large" disableElevation>Sign In</FormSubmitBtn>
                </FormBtnDiv>
                <AccountRedirectBox>
                    <p>Don't have an account? <Link to='/register'>Register Here!</Link> </p>
                </AccountRedirectBox>
            </Form>
    
        </FormBox>            
    </FormContainer>
    )
}

export default UserLoginForm;