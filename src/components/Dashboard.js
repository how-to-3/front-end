import { Switch, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import CreatorForm from './CreatorForm';
import UpdatePost from './UpdatePost';
import axiosWithAuth from './axiosWithAuth';
import HowToDetails from './HowToDetails';
import { Spinner } from 'reactstrap'

const Dashboard = () => {

    const [howTos, setHowTos] = useState([])
    
    useEffect(() => {
            axiosWithAuth()
            .get('/guides')
            .then(response => {
                console.log("response from api call in dashboard :",response)
                setHowTos(response.data);
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }, []);
    
    console.log("howTo in dashboard : ", howTos)
    return (
        
        <div className="howTo-list">
            <CreatorForm />
            { 
            howTos.length > 0 ?
            (
                howTos.map(howTo => (
                <HowToDetails key={howTo.id} howTo={howTo} />
            ))
            ) 
            : 
            <div className="spinner-container" style={{display:"flex", alignItems:"center", flexDirection:"column",}}>
                <h6 style={{color:"white", margin:"2% 0 2% 0"}}>OH NO! Your dashboard is empty..</h6>
                <h6 style={{color:"white", margin:"0% 0 2% 0"}}>Add a New Item to Your Dashboard...</h6>
            </div>
            }
    </div>
    )
}

export default Dashboard
