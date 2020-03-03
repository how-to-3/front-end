import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Styled from 'styled-components';
import axiosWithAuth from './axiosWithAuth';
import { useForm } from "react-hook-form";
const StyledButton = Styled.button`
&:hover{
    cursor: pointer;
}
`


const RegisterColapse = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const { register, handleSubmit, errors } = useForm()
    
    
    
    const [signup, setSignup] = useState({username: "", password: ""})

    const onSubmit = (e) => {
        console.log("testing post request for register :");
        axiosWithAuth()
            .post("/register", signup)
            .then(res => {
                console.log("my response from register :", res);
                // localStorage.setItem("token", res.data.user.token);
                // localStorage.setItem("user", JSON.stringify(res.data.user));
                // props.history.push("/dashboard");
            })
            .catch(err => {console.log("error with register post :", err)});
        // e.target.reset();
    }
    const changeHandler = elem => {
        setSignup({ ...signup, [elem.target.name]: elem.target.value });
    }



    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="register-container" style={{width:"100%", height:"100%"}}>
            <div style={{padding:"1% 30% 0 30%", display:"flex", flexDirection:"column", justifyContent:"center", backgroundColor:"#3e444a"}}>
            <Button color="dark" onClick={toggle} style={{ marginBottom: '1rem' }}>Don't have an Account?<br></br> Sign Up!</Button>
            <Collapse isOpen={isOpen}>
                <div style={{}}>
                <Card color="dark">
                <div style={{}}>
                    <CardBody color="dark">
                        <div style={{margin:"0 20% 0 20%"}}>
                <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column"}}>
                    
                    {/* <label style={{color:"White",}}>What's your Email Address?<br></br>(Your email be kept <span style={{textDecoration:"underline",fontWeight:"bold"}}>private</span>)</label>
                    <input
                    style={{margin:"0 0 5% 0"}}
                    /> */}
                    <label style={{color:"White",}}>Enter a New Username<br></br>(This is what you'll log in with)</label>
                    <input
                    name="username"
                    type="text"
                    onChange={changeHandler}
                    style={{margin:"0 0 5% 0"}}
                    />
                    <label style={{color:"White",}}>Create a Password <br></br>(Minimum of 6 characters)</label>
                    <input
                    name="password"
                    type="password"
                    onChange={changeHandler}
                    style={{margin:"0 0 5% 0"}}/>
                    {/* <label style={{margin:"1% 0 1% 0", color:"white", display:"flex", justifyContent:"flexStart"}}>Security Question:</label>
                    <select style={{margin:"1% 0 1% 0"}}> 
                        <option>What was your childhood nickname?</option>
                        <option>In what city did you meet your spouse/significant other?</option>
                        <option>What is the name of your favorite childhood friend?</option>
                        <option>What street did you live on in third grade?</option>
                        <option>What is the middle name of your youngest child?</option>
                        <option>What is the middle name of your oldest sibling?</option>
                        <option>What school did you attend for sixth grade?</option>
                        <option>What was the name of your first stuffed animal?</option>
                        <option>In what city or town did your mather and father meet?</option>
                    </select>
                    <input 
                    type="text" */}
                    <button type="submit" className="submitButton" style={{margin:"10% 0 0 0", borderRadius:"5px", width:"100%",}}>Finish</button>
                </form>
                </div>
                    </CardBody>
                    </div>
                </Card>
                </div>
            </Collapse>
        </div>
    </div>
    );
}

export default RegisterColapse;