import React, { useState, useEffect, Component, useContext } from 'react';
import axiosWithAuth from './axiosWithAuth';
import { useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import UpdatePost from './UpdatePost';
import { useHistory } from 'react-router-dom';
import { NameContext } from '../App';
import Styled from 'styled-components';

const StyledButton = Styled.button`
    background-color: #343A40;
    display: flex;
    margin: 0% 0% 0 0;
    height: 30px;
    width: auto;
    border-Radius: 5px;
    border: 1px solid black;
    color: white;
    &:hover{
        background-color: #ff0c0c
    }
`

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
                <div style={{ backgroundColor:"#343A40", color:"white", display:"Flex", padding:"2%", flexDirection:"column", margin:"1% 25% 0 25%", borderRadius: "5px", boxShadow:"1px 1px 10px 2px #202020", }}>
                        <div style={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                            <h2> {howToCard.guide_name}</h2>
                            <StyledButton onClick={deleteItem}>X</StyledButton>
                        </div>
                        <em style={{margin:".5% 1% 2% 0%", color:"#FFBA08"}}> {howToCard.category}</em>
                        <p style={{fontSize:"1.25rem", margin:"5% 0% 5% 0%"}}>Description: {howToCard.description}</p>
                        
                        <div style={{display:"flex", justifyContent:"space-between"}}>   
                            <UpdatePost howToCard={howToCard}/>
                            <div style={{display:"flex", flexDirection:"column", alignContent:"center"}}>
                                <h5 style={{fontSize:"3rem", margin:"0 0 0 35px" }}>{howToCard.score}</h5>
                                <h5 style={{fontSize:"1.5rem", fontWeight:"bold"}}>Difficulty</h5>
                            </div>
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