// DISPLAY SELECTED CARD INFO WITH TURNARY TO DISPLAY EDIT FORM IF EDIT === TRUE
// DISPLAY DELETE BUTTON TO DELETE CARD ENTIRELY



import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const UpdatePost = props => {
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
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);


        return (
                <div className="colapse-container" style={{width:"100%", height:"100%"}}>
                <div style={{ padding:"2% 30% 0 30%", display:"flex", flexDirection:"column", justifyContent:"center", backgroundColor:"#3e444a"}}>
        <h2 style={{display:"flex", justifyContent:"center", margin: "0 0 5% 1%", color:"white"}}>Create a How-to!</h2>
        <Button color="dark" onClick={toggle} style={{ marginBottom: '1rem' }}>Edit</Button>
        <Collapse isOpen={isOpen}>
                <div style={{}}>
                <Card color="dark">
                <div style={{}}>
                <CardBody color="dark">
                        <div style={{margin:"0 20% 0 20%"}}>
                <form style={{display:"flex", flexDirection:"column"}}>
                <label style={{color:"White",}}>New Guide Name </label>
                <input
                style={{margin:"0 0 5% 0"}}
                />
                <label style={{color:"White",}}>New Catagory </label>
                <input
                style={{margin:"0 0 5% 0"}}
                />
                <button style={{margin:"10% 0 0 0", borderRadius:"5px", width:"100%",}}>Confirm</button>
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

export default UpdatePost;