import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import axiosWithAuth from './axiosWithAuth';

const LoginColapse = (props) => {

    const[userCredentials, setUserCredentials] = useState({username:'', password:''})

    const handleChange = e => {
        setUserCredentials({
            ...userCredentials,
            [e.target.name]: e.target.value
            })
    }
    const onSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/auth/login', userCredentials)
        .then( res => {
            console.log("my response from login :", res)
            localStorage.setItem('token', res.data.token)
            // props.history.push('/dashboard')
        })
        .catch(err => {console.log("error with login post :", err)})
    }

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="colapse-container" style={{width:"100%", height:"100%"}}>
                <div style={{ padding:"2% 30% 0 30%", display:"flex", flexDirection:"column", justifyContent:"center", backgroundColor:"#3e444a"}}>
            <h2 style={{display:"flex", justifyContent:"center", margin: "0 0 5% 1%", color:"white"}}>Log In / Register</h2>
            <Button color="dark" onClick={toggle} style={{ marginBottom: '1rem' }}>Log In</Button>
            <Collapse isOpen={isOpen}>
                <div style={{}}>
                <Card color="dark">
                <div style={{}}>
                    <CardBody color="dark">
                        <div style={{margin:"0 20% 0 20%"}}>
                <form onSubmit={onSubmit} style={{display:"flex", flexDirection:"column"}}>
                    <label style={{color:"White",}}>Username</label>
                    <input
                    name="username"
                    type="text"
                    onChange={handleChange}
                    style={{margin:"0 0 5% 0"}}
                    value={userCredentials.username}
                    />
                    <label style={{color:"White",}}>Password</label>
                    <input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    style={{margin:"0 0 5% 0"}}
                    value={userCredentials.password} 
                    />
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