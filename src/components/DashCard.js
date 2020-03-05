import React, { useState, useEffect, Component, useContext } from 'react';
import axiosWithAuth from './axiosWithAuth';
import { useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import UpdatePost from './UpdatePost';
import { useHistory } from 'react-router-dom';
import { NameContext } from '../App';


const DashCard = (props) => {

    const history = useHistory()

    const { howToCard, setHowToCard } = useContext(NameContext);

    const deleteItem = () => {
        axiosWithAuth()
        .delete(`/guides/${props.match.params.id}`)
        .then( resp => {
            console.log("item deleted successfully :", resp)
            history.push('/dashboard')
        })
        .catch(error => {console.log("error when deleting :", error)})
    }

    const { id } = useParams()

    useEffect(()=>{
        console.log("my delete props", props)
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
        <div className="dashcard-container" >

            {
                howToCard.guide_name ? 
                <div style={{ backgroundColor:"#1C3144", color:"white", display:"Flex", alignItems:"center", margin:"2% 25% 2% 25%", padding:"2%", flexDirection:"column",}}>
                    <h2> {howToCard.guide_name}</h2>
                    <em style={{margin:".5% 0 2% 0", color:"#FFBA08"}}> {howToCard.category}</em>
                    <p style={{fontSize:"1.25rem", margin:"5% 0% 5% 0%"}}>Description: {howToCard.description}</p>
                    <p style={{fontSize:"1.5rem"}}>Level of Difficulty: {howToCard.score}</p>
                    <div className="button-container">
                        <button onClick={deleteItem} style={{margin:"10% 0 0 0", borderRadius:"5px", width:"100%",}}>Delete</button>
                    </div>
                    <div className="update-container" style={{width: "100%",}}>
                        <UpdatePost howToCard={howToCard}/>
                    </div>
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