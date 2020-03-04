import React, { useState, useEffect } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import axiosWithAuth from './axiosWithAuth';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';


const CreatorForm = props => {

const [newHowTo, setNewHowTo] = useState({
        guide_name:"",
        category:"",
        description:"",
        score:""
})

const { register, handleSubmit, errors } = useForm()

const handleChanges = e => {
        setNewHowTo({...newHowTo,[e.target.name]: e.target.value})
}

const history = useHistory()

const onSubmit = e => {
        setNewHowTo([newHowTo])
        console.log("new how-to submitted :", newHowTo)
        axiosWithAuth()
        .post(`/guides`, newHowTo)
        .then( res => {
                console.log("guide posted successfully :",res)
                history.push('/dashboard')
        })
        .catch(err => {console.log("error adding new how-to", err)})
}

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
                <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column"}}>
                <label style={{color:"White",}}>Guide Name:</label>
                <input
                name="guide_name"
                onChange={handleChanges}
                style={{margin:"0 0 5% 0"}}
                />
                <label style={{color:"White",}}>Category:</label>
                <input
                name="category"
                onChange={handleChanges}
                style={{margin:"0 0 5% 0"}}
                />
                <label style={{color:"White",}}>Description:</label>
                <input
                name="description"
                onChange={handleChanges}
                style={{margin:"0 0 5% 0"}}
                />
                <label style={{color:"White",}}>Difficulty:</label>
                <input
                name="score"
                onChange={handleChanges}
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