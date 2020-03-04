// REGISTER PAGE

// { USEFORM } FROM 'REACT-HOOK-FORM'? (FAST + EASY VALIDATION!)

// <FORM>
    // CREATE A USERNAME
    // CREATE A PASSWORD
    // Sign up bttn
// </FORM>

// EXAMPLE OF VALIDATION WITH USEFORM: 
// {errors.email && errors.email.type === "minLength" && (
//    <p> This field requires a minimum length of 3 characters. </p> 
// )}
import React, {useState } from 'react';
import { useForm } from "react-hook-form"; 


const Register = () => {
const [values, setValues] = useState({ UserName: "", PassWord: ""})
const [valueErrors, setValueErrors] = useState({ UserName: "", PassWord: ""})


const handleChange = e => {
    const {name, value } = event.target;
    setValues({
        ...values,
        [name]:value
    })
}

const handleSubmit = event => {
    event.preventDefault()
    submit()
}

function submit(){
    console.log("submitted Succesfully")
}
    
    return (
        // <div>
        //     <form>
        //         <div>
        //             <label>UserName</label>
        //         <div>
        //         <input name = "UserName" type = "text" onChange = {handleChange}/>
        //         {/* error message here*/}
        //         </div>
        //     </div>
        //     <div>
        //         <label>PassWord</label>
        //         <div>
        //         <input name = "PassWord" type = "password" onChange = {handleChange}/>
        //         {/* error message here*/}
        //         </div>
        //     </div>
        //     <button type = "submit">Submit</button>
        //     </form>    
        // </div>

        handleChange,
        handleSubmit,
        values
    )
}

export default Register;