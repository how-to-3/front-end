// LOGIN PAGE

// { USEFORM } FROM 'REACT-HOOK-FORM'? (FAST + EASY VALIDATION!)

// <FORM>
    // USERNAME 
    // PASSWORD
    // 'LOG IN' BUTTON
// </FORM>

// EXAMPLE OF VALIDATION WITH USEFORM: 
// {errors.username && errors.username.type === "minLength" && (
//    <p> This field requires a minimum length of 3 characters. </p> 
// )}

// EXAMPLE OF VALIDATION WITH USEFORM: 
// {errors.username && errors.username.type === "required" && (
//    <p> This field requires a minimum length of 3 characters. </p> 
// )}

import React from 'react';

const Login = () => {
    return (
        <div>Login Page</div>
    )
}

export default Login