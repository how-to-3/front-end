import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Styled from 'styled-components';

const StyledButton = Styled.button`
&:hover{
    cursor: pointer;
}
`


const RegisterColapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);

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
                <form style={{display:"flex", flexDirection:"column"}}>
                    <label style={{color:"White",}}>Username</label>
                    <input
                    
                    />
                    <label style={{color:"White",}}>Password</label>
                    <input
                    
                    />
                    <label style={{color:"White", margin:"0% 0 0 0",}}>Are you a Content Creator?</label>
                    <select>
                        <option>No</option>
                        <option>Yes</option>
                    </select>
                    <button style={{margin:"10% 0 0 0", borderRadius:"5px", width:"100%",}}>Finish</button>
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