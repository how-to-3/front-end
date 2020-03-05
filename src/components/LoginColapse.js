import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axiosWithAuth from './axiosWithAuth';

const LoginColapse = (props) => {

    const[userCredentials, setUserCredentials] = useState({username:'', password:''})

    const { register, handleSubmit, errors } = useForm()

    const history = useHistory()
    
    const handleChange = e => {
        setUserCredentials({
            ...userCredentials,
            [e.target.name]: e.target.value
            })
    }

    const onSubmit = () => {
        axiosWithAuth()
        .post('/auth/login', userCredentials)
        .then( res => {
            console.log("my response from login :", res)
            localStorage.setItem('token', res.data.token)
            history.push('/dashboard')
        })
        .catch(err => {console.log("error with login post :", err)})
    }

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);


    

    return (
        <div className="colapse-container" style={{width:"100%", height:"100%"}}>
            <div style={{ padding:"2% 30% 0 30%", display:"flex", flexDirection:"column", justifyContent:"center", backgroundColor:"#3e444a"}}>
                <h2 style={{display:"flex", justifyContent:"center", margin: "0 0 2% 1%", color:"white"}}>Log In / Register</h2>
                <h5 style={{display:"flex", justifyContent:"center",color:"white", margin:"1% 0 3% 0",}}><Link to ="/" style={{color:"white"}}>Skip This</Link></h5>
            <div>
            
            {/* <div className="feed-header-container" style={{color:"white", display: "flex", flexDirection:"column", alignItems: "center", margin: "2% 2% 1% 2%"}}>
            <h1>How-To Feed</h1>
			<h5><Link to ="/login" style={{color:"white"}}>Log In/Register</Link> to Create a Post</h5>
            </div> */}



            </div>
            <Button color="dark" onClick={toggle} style={{marginBottom: '1rem' }}>Log In</Button>
            <Collapse isOpen={isOpen}>
                <div style={{}}>
                <Card color="dark">
                <div style={{}}>
                    <CardBody color="dark">
                        <div style={{margin:"0 20% 0 20%"}}>
                <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column"}}>
                    <label style={{color:"White",}}>Username</label>
                    <input
                    name="username"
                    type="text"
                    onChange={handleChange}
                    style={{margin:"0 0 5% 0"}}
                    value={userCredentials.username}
                    ref={register({ required: true, minLength: 3 })}
                    />
                    {errors.username && errors.username.type === "required" && (
                    <p style={{color:"red"}}>
                        This field is required.
                    </p>
                    )}
                    {errors.username && errors.username.type === "minLength" && (
                    <p style={{color:"red"}}>
                        This field requires a minimum length of 3 characters.
                    </p>
                    )}

                    <label style={{color:"White",}}>Password</label>
                    <input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    style={{margin:"0 0 5% 0"}}
                    value={userCredentials.password}
                    ref={register({ required: true, minLength: 6 })} 
                    />
                    {errors.password && errors.password.type === "required" && (
                    <p style={{color:"red"}}>
                        This field is required.
                    </p>
                    )}
                    {errors.password && errors.password.type === "minLength" && (
                    <p style={{color:"red"}}>
                        This field requires a minimum length of 3 characters.
                    </p>
                    )}


                    <button type="submit" style={{margin:"10% 0 0 0", borderRadius:"5px", width:"100%",}}>Sign In</button>
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

export default LoginColapse;