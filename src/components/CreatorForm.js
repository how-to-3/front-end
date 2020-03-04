// CREATE HOW-TO FORM FOR CREATING NEW HOW-TO'S
// WHEN FORM SUBMITS -> REDIRECT TO UPDATED /DASHBOARD

/* <FORM>
        <LABEL>*What is the to how-to thing?*</LABEL>
        <INPUT 
        />

        <LABEL>*How do i do the how-to thing?*</LABEL>
        <INPUT 
        />

        <LABEL>*Further explanation:*</LABEL>
        <INPUT 
        />

        <LABEL>*Who wrote the how-to thing?*</LABEL>
        <INPUT 
        />

        <BUTTON>SUBMIT NEW HOW-TO!</BUTTON>
</FORM> */
// setting State for Creator Card     
// const [Creator, setCreator] = useState({
//         howToTitle: "",
//         howToDescription: "",
//         howToAuthor: "",
// })

// //onChange handler
// const handleChanges = e => {
//     setCreator({...Creator,[e.target.name]: e.target.value})
// }

// //handleSubmit 
// const handleSubmit = e => {
//     e.preventDefault();
//     props.setCreator([Creator])
// }


// IF USER MAKES A POST -> MAKE USER A CREATOR
// IF NO POSTS -> USER === USER


import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const CreatorForm = props => {

const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);


        return (
        <div className="colapse-container" style={{width:"100%", height:"100%"}}>
        <div style={{ padding:"2% 30% 0 30%", display:"flex", flexDirection:"column", justifyContent:"center", backgroundColor:"#3e444a"}}>
        <h3 style={{display:"flex", justifyContent:"center", margin: "0 0 5% 1%", color:"white"}}>Welcome to your Dashboard</h3>
        <Button color="dark" onClick={toggle} style={{ marginBottom: '1rem' }}>Add A How-To </Button>
        <Collapse isOpen={isOpen}>
                <div style={{}}>
                <Card color="dark">
                <div style={{}}>
                <CardBody color="dark">
                        <div style={{margin:"0 20% 0 20%"}}>
                <form style={{display:"flex", flexDirection:"column"}}>
                <label style={{color:"White",}}>Title</label>
                <input
                style={{margin:"0 0 5% 0"}}
                />
                <label style={{color:"White",}}>Description </label>
                <input
                style={{margin:"0 0 5% 0"}}
                />
                <label style={{color:"White",}}>Author Name</label>
                <input
                style={{margin:"0 0 5% 0"}}
                />
                <button style={{margin:"10% 0 0 0", borderRadius:"5px", width:"100%",}}>Publish!</button>
            </form>
            </div>
                </CardBody>
                </div>
            </Card>
            </div>
        </Collapse>
    </div>
</div>
        )
}

export default CreatorForm;