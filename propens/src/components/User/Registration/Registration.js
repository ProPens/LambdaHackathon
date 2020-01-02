import React from 'React';
import {useFormInput} from '../../../hooks/FormInput';


const Registration = () => {
    //State
    const [fullName, setFullName] = useFormInput("");
    console.log(fullName);

    return(
        <div>
            Registration
            <div className="form-container">
                <form action="">
                    <input type="text" name="userName" id=""/>
                    <input type="email" name="email" id=""/>
                    <input type="text" name="fullName" id=""/>
                    <input type="text" name="schoolName" id=""/>
                    <select name="grade" id="">
                        <option value="6">6th Grade</option>
                        <option value="7">7th Grade</option>
                        <option value="8">8th Grade</option>
                        <option value="9">9th Grade</option>
                        <option value="10">10th Grade</option>
                        <option value="11">11th Grade</option>
                        <option value="12">12th Grade</option>
                        <option value="freshman">Freshman - College</option>
                        <option value="sophmore">Sophmore - College</option>
                        <option value="junio">Junior - College</option>
                        <option value="senior">Senior - College</option>
                    </select>
                    <input type="password" name="password" id=""/>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Registration;