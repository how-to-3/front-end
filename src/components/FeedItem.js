import React from 'react';


const FeedItem = (props) => {
    return (
        <div>
            {props.guides.map(elem => {
                return (
                    <div style={{border: "5px solid white",display:"flex", flexDirection:"column", color:"white", display: "flex", flexDirection:"column", alignItems: "center", margin: "2% 25% 1% 25%"}} key={elem.id}>
                        <h1>{elem.guide_name}</h1>
                        <h2>Category: {elem.category}</h2>
                        <h5>Description: {elem.description}</h5>
                        <h5>Difficulty: {elem.score}</h5>
                    </div>
                )
            })} 
        </div>
    )

}


export default FeedItem;


