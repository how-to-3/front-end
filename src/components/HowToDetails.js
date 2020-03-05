import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

const HowToDetails = (props) => {

console.log("props for how to detail", props)
    

return (
        <div>
            <div style={{ backgroundColor:"#1C3144", border:"2px solid white", margin:"1% 25% 0 25%"}}>
                <Link to = {`/guides/${props.howTo.id}`}>
                
            <div className="howTo-card" style={{color:"white", textDecoration:"none"}}>
                
                <h2 style={{margin:"2% 0 0% 0", display:"flex", justifyContent:"center"}}>{props.howTo.guide_name}</h2>
                
                <div className="category" style={{margin:".5% 0 2% 0", display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <em style={{color:"#FFBA08"}}>{props.howTo.category}</em>
                </div>
                
                <div className="howTo-description" style={{margin:"0 2% 0 2%"}}>
                    <p><span style={{fontWeight:"bold"}}>Description:</span> {props.howTo.description}</p>
                </div>
                
                <div className="score" style={{display:"flex", flexDirection:"column", color:"white", alignItems: "center", margin:"0 2% 0 2%"}}>
                    <h5><span style={{fontWeight:"bold"}}>Level of Difficulty: </span> {props.howTo.score}</h5>
                </div>
            </div>
            </Link>
            </div>
        </div>
    )
}

export default HowToDetails;
