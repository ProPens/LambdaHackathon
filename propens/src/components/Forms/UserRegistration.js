import React from 'react';

import {formStyles} from '../../StyledComponents/MaterialUIGlobalStyles';

const UserRegistration = () => {
    const styleClass = formStyles();
    return (
        <div className={styleClass.formContainer}>
            <div className="form-container">
                <form className={styleClass.registrationForm}>
                    <div className="inputContainer">
                        <label htmlFor="fullName">Full Name: </label>
                        <input type="text" name="fullName"/>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="userName">Username:</label>
                        <input type="text" name="userName"/>
                    </div>
                    <div className="inputContainer"><label htmlFor=""></label></div>
                    <div className="inputContainer"><label htmlFor=""></label></div>
                    <div className="inputContainer"><label htmlFor=""></label></div>
                    <div className="inputContainer"><label htmlFor=""></label></div>
                   
                    
                    <input type="text" name="userName"/>
                    <input type="text" name="school"/>
                    <input type="email" name="email" />
                    <input type="password" name="password" />
                    <select name="grade">
                        <option value="">Middle School</option>
                        <option value="">High School</option>
                        <option value="">UnderGrad/College</option>
                    </select>
                    <button type="submit">Register</button>
                </form>
            </div>

        </div>
    )
}

export default UserRegistration;