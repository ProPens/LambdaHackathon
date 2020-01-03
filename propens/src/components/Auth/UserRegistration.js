import React from 'react';
import {useFormInput} from '../../hooks/FormInput';
import {FormContainer, FormBox, FormHeading, Form, FormInputDiv, FormInputField, FormSelectField, StyledFormControl, FormSubmitBtn, FormBtnDiv} from '../../StyledComponents/StyledFormComponents';
import {InputLabel} from '@material-ui/core';
import axios from 'axios';

const UserRegistration = () => {
  
    const [firstName, setFirstName] = useFormInput('');
    const [lastName, setLastName] = useFormInput('');
    const [userName, setUserName] = useFormInput('');
    const [email, setEmail] = useFormInput('');
    const [password, setPassword] = useFormInput('');
    const [schoolLevel, setSchoolLevel] = useFormInput('');

    const clearFormSubmission = () => {
        setFirstName('');
        setLastName('');
        setUserName('');
        setEmail('');
        setPassword('');
        setSchoolLevel('middle school');
    }
    const RegisterUser = data =>{
        axios.post(`https://pro-pens.herokuapp.com/api/auth/register`, data)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    }
    
    const handleSubmit = e => {
        e.preventDefault();  
        const data = {
            fullname: [firstName, lastName],
            username: userName,
            email: email,
            password: password,
            school_level: schoolLevel
        }  
        RegisterUser(data);
        clearFormSubmission();
    }
    
    return (
        <FormContainer>
            <FormHeading>Create a New Account</FormHeading> 
            <FormBox>
                <Form onSubmit={handleSubmit}>
                    <FormInputDiv>
                        <FormInputField type="text" name="firstName" value={firstName} label="First Name" variant="standard" required onChange={setFirstName} />
                    </FormInputDiv>
                    <FormInputDiv>
                        <FormInputField type="text" name="lastName" value={lastName} label="Last Name" onChange={setLastName}/>
                    </FormInputDiv>
                    <FormInputDiv>
                        <FormInputField type="text" name="userName" value={userName}  label="Username" variant="standard" required onChange={setUserName}/>
                    </FormInputDiv>
                    <FormInputDiv>
                        <FormInputField type="email" name="email" value={email}  label="Email" variant="standard" required onChange={setEmail} />
                    </FormInputDiv>
                    <FormInputDiv>
                        <FormInputField type="password" name="password" value={password} autoComplete="current-password" label="Password" variant="standard" required onChange={setPassword} />
                    </FormInputDiv>
                    <FormInputDiv>
                        <StyledFormControl>
                            <InputLabel required>Select Grade Level</InputLabel>
                            <FormSelectField required labelId="School Level" name="schoolLevel" value={schoolLevel} variant="standard" onChange={setSchoolLevel}>
                                <option value="middle school" >Middle School</option>
                                <option value="high school">High School</option>
                                <option value="college">UnderGrad/College</option>
                            </FormSelectField>
                        </StyledFormControl>
                    </FormInputDiv>   
                    <FormBtnDiv> 
                        <FormSubmitBtn type="submit" color="primary" variant="contained" size="large" disableElevation>Register</FormSubmitBtn>
                    </FormBtnDiv>  
                </Form>
            </FormBox>            
        </FormContainer>
    )
}

export default UserRegistration;