import React, { useState, useEffect, Component} from 'react';
import axiosWithAuth from './axiosWithAuth';
import { useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import UpdatePost from './UpdatePost';


const DashCard = (props) => {
    const [howToCard, setHowToCard] = useState({
        guide_name:"",
        category:"",
        description:"",
        score:""
    })





    const { id } = useParams()

    useEffect(()=>{
        axiosWithAuth()
        .get(`/guides/${id}`)
        .then( resp => {
            console.log("dashcard resp :", resp)
            setHowToCard(resp.data.guide)
        })
        .catch(err => {console.log("dashcard axios error :", err)})
    },[])

    console.log("how to card in dashcard :",howToCard)
    return (
        <div className="dashcard-container">

            {
                howToCard.guide_name ? 
                <div style={{color:"white", border:"2px solid white", display:"Flex", alignItems:"center", margin:"2% 25% 2% 25%", padding:"2%", flexDirection:"column",}}>
                    <h2> {howToCard.guide_name}</h2>
                    <em style={{margin:".5% 0 2% 0"}}> {howToCard.category}</em>
                    <p style={{fontSize:"1.25rem", margin:"5% 0% 5% 0%"}}>Description: {howToCard.description}</p>
                    <p style={{fontSize:"1.5rem"}}>Level of Difficulty: {howToCard.score}</p>
                    <div className="button-container">
                        <button style={{margin:"10% 0 0 0", borderRadius:"5px", width:"100%",}}>Delete</button>
                    </div>
                    <UpdatePost />
                </div>
                : 
                <div>
                    <h2 style={{color:"white", display:"Flex", justifyContent:"center"}}>Loading...</h2>
                    <div className="spinner-container" style={{display:"Flex", justifyContent:"center"}}>
                        <Spinner 
                        color="dark"/>
                    </div>
                </div>
            }
        </div>
    )
}

export default DashCard;