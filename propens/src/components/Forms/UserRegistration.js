import React from 'react';
import {useFormInput} from '../../hooks/FormInput';
import {Button, TextField, Select} from '@material-ui/core';
import {formStyles} from '../../StyledComponents/MaterialUIGlobalStyles';
import axios from 'axios';

const UserRegistration = () => {
    const styleClass = formStyles();
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
        <div className={styleClass.formContainer}>
            <div className="form-container">
                <h1>Create a New Account</h1>
                <form className={styleClass.registrationForm} onSubmit={handleSubmit}>
                    <div className="inputDiv">
                        <TextField type="text" name="firstName" value={firstName} label="First Name" variant="standard" required onChange={setFirstName} />
                    </div>
                    <div className="inputDiv">
                        <TextField type="text" name="lastName" value={lastName} label="Last Name" onChange={setLastName}/>
                    </div>
                    <div className="inputDiv">
                        <TextField type="text" name="userName" value={userName}  label="Username" variant="standard" required onChange={setUserName}/>
                    </div>
                    <div className="inputDiv">
                        <TextField type="email" name="email" value={email}  label="Email" variant="standard" required onChange={setEmail} />
                    </div>
                    <div className="inputDiv">
                        <TextField type="password" name="password" value={password} autoComplete="current-password" label="Password" variant="standard" required onChange={setPassword} />
                    </div>
                    <div className="inputDiv">
                        <Select required labelId="School Level" autoWidth="true" name="schoolLevel" value={schoolLevel} variant="standard" onChange={setSchoolLevel}>
                            <option>Select Grade Level</option>
                            <option value="middle school" >Middle School</option>
                            <option value="high school">High School</option>
                            <option value="college">UnderGrad/College</option>
                        </Select>
                    </div>      
                    <Button type="submit">Register</Button>
                </form>
            </div>
        </div>
    )
}

export default UserRegistration;