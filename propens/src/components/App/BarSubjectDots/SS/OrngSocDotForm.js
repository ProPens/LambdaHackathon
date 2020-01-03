import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';

const StyledForm = styled.form`
 width: 50%;
//  height: 40.5vh;
//  margin: auto 100px;
 padding: 32px;
 font-weight: bold;
 background-color: #F8F9F7;
 color: #223F68;
 display: flex;
 flex-direction: column;
 margin-top: 10px;

 input {
     margin-bottom: 28px;
     padding: 0.5rem;
     font-size: 16px;
     width: 50%;
     display: flex;
     color: #223F68;
     border: 2px solid #223F68;
     align-self: flex-end;
 }
 label {
     display: flex;
     align-self: center;
     
 }
 button {
   max-width: 100%;
   width: 250px;
   margin: 20px 0;
   padding: 12px 20px;
   border-style: none;
   background-color: #457B9D;
   box-shadow: 0px 2px 2px lightgray;
   font-size: 25px;
   font-weight: 500;
   color: #F8F9F7;
   cursor: pointer;
   outline: none;
   -webkit-appearance: none;
   display: flex;
   align-self: flex-end;
}
textarea {
     padding: 0.5rem;
     font-size: 16px;
     width: 50%;
     display: flex;
     align-self: flex-end;
     color: #223F68;
     border: 2px solid #223F68;
}
 `;

const OrngSocDotForm = props => {
  const [socialStudies, setSocialStudies] = useState({
    assignmentName: "",
    date: "",
    details: ""
  });
  const changeHandler = event => {
    setSocialStudies({ ...socialStudies, [event.target.name]: event.target.value });
    console.log(event.target);
  };
  const submitForm = event => {
    event.preventDefault();
    // post the entry 
    setSocialStudies({ assignmentName: "", date: "", details: ""});
    props.closeNav();
  }
  return (
    <StyledForm onSubmit={submitForm}>
        <h1>Let's Talk About Social Studies!</h1>
      <label htmlFor="assignmentName">What's the name of the assignment</label>
      <input 
            name="assignmentName" 
            id="assignmentName" 
            type="text" 
            placeholder="Assignment Name" 
            onChange={changeHandler}
            value={socialStudies.assignmentName}/>
        <label htmlFor="date">When did you have this assignment?</label>
        <input 
            name="date" 
            id="date" 
            type="date" 
            placeholder="Date" 
            onChange={changeHandler}
            value={socialStudies.date}/>
        <label htmlFor="details">Describe the assignment and your experience</label>
        <textarea 
            name="details" 
            id="details" 
            type="text" 
            placeholder="details" 
            onChange={changeHandler}
            value={socialStudies.details}
        > 
    
        </textarea>
        <button onClick = {() => {
            //axios post
        }}>
            Thumbs Up
        </button>
        <button onClick = {() => {
            //axios post
        }}>
            Thumbs downs
        </button>
      <button type="submit">Add Assignment</button>
    </StyledForm>
  );
};

export default OrngSocDotForm;