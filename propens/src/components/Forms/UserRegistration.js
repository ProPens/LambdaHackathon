import React from 'react';
import {useFormInput} from '../../hooks/FormInput';
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
                <h1>Create a New Account.</h1>
                <form className={styleClass.registrationForm} onSubmit={handleSubmit}>
                    <div className="inputContainer">
                        <label htmlFor="firstName">Full Name: </label>
                        <input type="text" name="firstName" value={firstName} onChange={setFirstName}/>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="lastName">Last Name: </label>
                        <input type="text" name="lastName" value={lastName} onChange={setLastName}/>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="userName">Username:</label>
                        <input type="text" name="userName" value={userName} onChange={setUserName}/>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="">Email:</label>
                        <input type="email" name="email" value={email} onChange={setEmail} />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="">Password: </label>
                        <input type="password" name="password" value={password} onChange={setPassword} />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="">Grade: </label>
                        <select name="grade" value={schoolLevel} onChange={setSchoolLevel}>
                            <option value="middle school" >Middle School</option>
                            <option value="high school">High School</option>
                            <option value="college">UnderGrad/College</option>
                        </select>
                    </div>         
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default UserRegistration;