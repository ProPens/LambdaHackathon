import React from 'react';
import {useFormInput} from '../../hooks/FormInput';
import {TextField} from '@material-ui/core';
import {SubmitBtn} from '../../StyledComponents/MaterialUIGlobalStyles';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const UserLoginForm = () => {
    const dashboard = useHistory();
    const [username, setUsername] = useFormInput('');
    const [password, setPassword] =  useFormInput('');

    const getUser = (data) =>{
        axios.post('https://pro-pens.herokuapp.com/api/auth/login', data)
        .then(res => {
            console.log(res);
            localStorage.setItem('userdata', JSON.stringify({
                username: res.data.username,
                token: res.data.token,
                loggedIn: true
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
        <div>
            <form onSubmit={handleSubmit} >
            <TextField type="text" label="Username" value={username} onChange={setUsername}/>
            <TextField type="password" label="password" value={password} onChange={setPassword}/>
            <div className="submit-btn">     
                <SubmitBtn type="submit">Login</SubmitBtn>  
            </div>
            </form>
        </div>
    )
}

export default UserLoginForm;