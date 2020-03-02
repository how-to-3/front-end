import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const LoginColapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="colapse-container">
            <div style={{ padding:"2% 30% 0 30%", display:"flex", flexDirection:"column", justifyContent:"center", backgroundColor:"#3e444a"}}>
            <h2 style={{margin: "0 0 4% 9%", color:"white"}}>-Log In or Register to Access Content-</h2>
            <Button color="dark" onClick={toggle} style={{ marginBottom: '1rem' }}>Log In</Button>
            <Collapse isOpen={isOpen}>
                <div style={{}}>
                <Card color="dark">
                <div style={{}}>
                    <CardBody color="dark">
                        <div style={{}}>
                <form style={{display:"flex", flexDirection:"column"}}>
                    <label style={{color:"White",}}>Username</label>
                    <input
                    
                    />
                    <label style={{color:"White",}}>Password</label>
                    <input
                    
                    />
                    <button style={{margin:"3% 0 0 41.5%", borderRadius:"5px", width:"20%",}}>Sign In</button>
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