import React, { useState, useEffect, useContext } from 'react';
import { Collapse, Button, CardBody, Card, FormGroup, Label, Input, FormText } from 'reactstrap';
import axiosWithAuth from './axiosWithAuth';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { NameContext } from '../App';


const CreatorForm = () => {
const { register, handleSubmit, errors } = useForm()    
const [selectedFile, setSelectedFile] = useState('')
const { newHowTo, setNewHowTo, resetCard } = useContext(NameContext);
const history = useHistory()

const handleChanges = e => {
        setNewHowTo({...newHowTo,[e.target.name]: e.target.value})
};
const fileChangeHandler = e => {
        setSelectedFile(e.target.files[0])
};
const fileSubmitHandler = (id) => {
        const fd = new FormData();
        fd.append('guide_image', selectedFile)
        axiosWithAuth()
                .put(`/guides/${id}/img_upload`, fd)
                .then(res => {
                        console.log('Image was uploaded!', res)
                        resetCard()
                        history.push('/')
                })
                .catch(err => {
                        console.log(err)
                })
};

const onSubmit = () => {
        setNewHowTo(newHowTo)
        console.log("new how-to submitted :", newHowTo)
        axiosWithAuth()
        .post(`/guides`, newHowTo)
        .then( res => {
                console.log("guide posted successfully :", res)
                fileSubmitHandler(res.data.newGuide.guide_id)
                // resetCard()
                // history.push('/')
        })
        .catch(err => {console.log("error adding new how-to", err)})
}

const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);
        return (
        <div className="colapse-container" style={{width:"100%", height:"100%"}}>
        <div style={{ padding:"2% 25% 0 25%", display:"flex", flexDirection:"column", justifyContent:"center", backgroundColor:"#3E444A"}}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <h3 style={{display:"flex", justifyContent:"center", margin: "0 0 1% 0%", color:"white"}}>Welcome to the<br></br> Dashboard </h3>
            <Button color="dark" onClick={toggle} style={{ width:"135px", marginBottom: '50px' }}>Add A How-To </Button>
        </div>
        <Collapse isOpen={isOpen}>
                <div style={{}}>
                <Card color="dark">
                <div style={{}}>
                <CardBody color="dark">
                        <div style={{margin:"0 20% 0 20%"}}>
                <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column"}}>
                <label style={{color:"White",}}>Guide Name:</label>
                <input
                name="guide_name"
                onChange={handleChanges}
                style={{margin:"0 0 5% 0"}}
                ref={register({required: true})}
                />
                {errors.guide_name&& errors.guide_name.type === 'required' && (
                        <p style={{color:"red"}}>
                            This field is required
                        </p>
                    )}
                <label style={{color:"White",}}>Category:</label>
                <input
                name="category"
                onChange={handleChanges}
                style={{margin:"0 0 5% 0"}}
                ref={register({required: true })}  
                />
                {errors.category&& errors.category.type === 'required' && (
                        <p style={{color:"red"}}>
                            This field is required
                        </p>
                    )}
                <label style={{color:"White",}}>Description:</label>
                <input
                name="description"
                onChange={handleChanges}
                style={{margin:"0 0 5% 0"}}
                ref={register({required: true })}  
                />
                {errors.description&& errors.description.type === 'required' && (
                        <p style={{color:"red"}}>
                            This field is required
                        </p>
                    )}
                <label style={{color:"White",}}>Difficulty:</label>
                <input
                name="score"
                onChange={handleChanges}
                style={{margin:"0 0 5% 0"}}
                ref={register({required: true })}  
                />
                {errors.score&& errors.score.type === 'required' && (
                        <p style={{color:"red"}}>
                            This field is required
                        </p>
                    )}
                <FormGroup>
                        <Label for="File">File</Label>
                        <Input type="file" onChange={fileChangeHandler} />
                        <FormText>
                                Upload an image for your How-To!
                        </FormText>
                </FormGroup>
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