import React from 'react';
import {useFormInput} from '../../hooks/FormInput';
import {formStyles} from '../../StyledComponents/MaterialUIGlobalStyles';

const UserRegistration = () => {
    const styleClass = formStyles();
    const [fullName, setFullName] = useFormInput('');
    const [userName, setUserName] = useFormInput('');
    const [email, setEmail] = useFormInput('');
    const [schoolName, setSchoolName] = useFormInput('');
    const [password, setPassword] = useFormInput('');
    const [grade, setGrade] = useFormInput('');
   

    //console.log(fullName, userName, email, schoolName, password, grade);
    return (
        <div className={styleClass.formContainer}>
            <div className="form-container">
                <h1>Create a New Account.</h1>
                <form className={styleClass.registrationForm}>
                    <div className="inputContainer">
                        <label htmlFor="fullName">Full Name: </label>
                        <input type="text" name="fullName" value={fullName} onChange={setFullName}/>
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
                        <label htmlFor="">School Name:</label>
                        <input type="text" name="schoolName" value={schoolName} onChange={setSchoolName}/>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="">Password: </label>
                        <input type="password" name="password" value={password} onChange={setPassword} />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="">Grade: </label>
                        <select name="grade" value={grade} onChange={setGrade}>
                            <option value="middle school">Middle School</option>
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