// REGISTER PAGE

// { USEFORM } FROM 'REACT-HOOK-FORM'? (FAST + EASY VALIDATION!)

// <FORM>
    // CREATE A USERNAME
    // CREATE A PASSWORD
    // SELECTOR -> ARE YOU A CREATOR? TRUE/FALSE
// </FORM>

// EXAMPLE OF VALIDATION WITH USEFORM: 
// {errors.email && errors.email.type === "minLength" && (
//    <p> This field requires a minimum length of 3 characters. </p> 
// )}
import React from 'react';
import { useForm } from "react-hook-form"; 

const Register = () => {
    return (
        <div>Register Page</div>
    )
}

export default Register;