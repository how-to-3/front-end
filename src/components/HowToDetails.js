import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const StyledLink = Styled.div`
&:hover{
    text-decoration: none;
}
`


const HowToDetails = (props) => {

console.log("props for how to detail", props)
    

return (
        <div>
            <div style={{ backgroundColor:"#343A40", margin:"1.5% 25% 0 25%", borderRadius: "5px", boxShadow:"1px 1px 10px 2px #202020"}}>
                <Link to = {`/guides/${props.howTo.id}`}>
                
            <div className="howTo-card" style={{color:"white", textDecoration:"none", justifyContent:"space-between"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <h2 style={{padding:"10px", margin:"5% 2% 0% 2%", display:"flex", justifyContent:"flexStart"}}>{props.howTo.guide_name}</h2>
                    
                    <div className="category" style={{margin:"0% 0 2% 3.5%", display:"flex", flexDirection:"column", alignItems:"flexStart"}}>
                        <em style={{color:"#FFBA08"}}>{props.howTo.category}</em>
                    </div>
                    
                    <div className="howTo-description" style={{margin:"0 2% 0 3.5%", width:"75%"}}>
                        <p><span style={{fontWeight:"bold", }}>Description:</span> {props.howTo.description}</p>
                    </div>
                </div>
                <div>
                    <div className="score" style={{margin:"0 2% 2% 2%", display:"flex", flexDirection:"column", color:"white", alignItems: "flex-end", margin:"0 2% 0 2%"}}>
                        <h5 style={{fontSize:"3rem", display:"flex", margin:" 0 7.5% 0 0" }}>{props.howTo.score}</h5>
                        <h5><span style={{fontWeight:"bold",}}>Level of Difficulty: </span></h5>
                    </div>
                </div>
            </div>
            </Link>
            </div>
        </div>
    )
}

export default HowToDetails;
