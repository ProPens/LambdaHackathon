import React from 'react';

const UserRegistration = () => {
    return (
        <div className="user-registration-form">
            <form action="">
                <input type="text" name="fullName" id=""/>
                <input type="text" name="userName" id=""/>
                <input type="text" name="school" id=""/>
                <input type="email" name="email" id=""/>
                <input type="password" name="password" id=""/>
                <select name="grade" id="">
                    <option value="">Middle School</option>
                    <option value="">High School</option>
                    <option value="">UnderGrad/College</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default UserRegistration;