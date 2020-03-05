// DISPLAY SELECTED CARD INFO WITH TURNARY TO DISPLAY EDIT FORM IF EDIT === TRUE
// DISPLAY DELETE BUTTON TO DELETE CARD ENTIRELY


import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import axiosWithAuth from './axiosWithAuth';
import { useForm } from "react-hook-form";

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
const { register, handleSubmit, errors } = useForm()    
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);

const [howto, setHowto] = useState({
        guide_name: props.howToCard.guide_name,
        category: props.howToCard.category,
        description: props.howToCard.description,
        score: props.howToCard.score
})

        const handleChange = e => {
                console.log(e.target.value)
                setHowto({
                        ...howto,
                        [e.target.name]: e.target.value
                })
        }

        const history = useHistory();

        const onSubmit = e => {
                axiosWithAuth()
                .put(`/guides/${props.howToCard.guide_id}`, howto)
                .then( res => {
                        console.log("update response :", res)
                        history.push('/dashboard')
                })
                .catch(error => {console.log("error updating :", error)})
        }
        console.log("my props :", props.howToCard.guide_id)


        return (
                
                <div className="colapse-container" style={{width:"100%", height:"100%"}}>
                <div style={{ padding:"2% 0% 0 0%", display:"flex", flexDirection:"column", justifyContent:"center", backgroundColor:"#3e444a"}}>
                <Button color="dark" onClick={toggle} style={{ marginTop:"1rem", marginBottom: '1rem'}}>Edit This How-To</Button>
                <Collapse isOpen={isOpen}>
                <div style={{}}>
                <Card color="dark">
                <div style={{}}>
                <CardBody color="dark">
                        <div style={{margin:"0 20% 0 20%"}}>
                <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column"}}>
                <label style={{color:"White",}}>New Guide Name:</label>
                        <input
                        name="guide_name"
                        value={howto.guide_name}
                        onChange={handleChange}
                        style={{margin:"0 0 5% 0"}}
                        ref={register({required: true})}
                        />
                         {errors.guide_name&& errors.guide_name.type === 'required' && (
                                <p style={{color:"red"}}>
                                    This field is required
                                </p>
                            )}
                <label style={{color:"White",}}>New Catagory:</label>
                <input
                name="category"
                value={howto.category}
                onChange={handleChange}
                style={{margin:"0 0 5% 0"}}
                ref={register({required: true })}  
                />
                 {errors.category&& errors.category.type === 'required' && (
                        <p style={{color:"red"}}>
                            This field is required
                        </p>
                    )}
                <label style={{color:"White",}}>New Description:</label>
                <input
                name="description"
                value={howto.description}
                onChange={handleChange}
                style={{margin:"0 0 5% 0"}}
                ref={register({required: true })}  
                />
                 {errors.description&& errors.description.type === 'required' && (
                        <p style={{color:"red"}}>
                            This field is required
                        </p>
                    )}
                <label style={{color:"White",}}>New Difficulty:</label>
                <input
                name="score"
                value={howto.score}
                onChange={handleChange}
                style={{margin:"0 0 5% 0"}}
                ref={register({required: true })}  
                />
                 {errors.score&& errors.score.type === 'required' && (
                        <p style={{color:"red"}}>
                            This field is required
                        </p>
                    )}
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