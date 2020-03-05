import React from 'react';


const FeedItem = (props) => {
    return (
        <div>
            {props.guides.map(elem => {
                return (
                    <div style={{backgroundColor:"#1C3144", border: "2px solid white",display:"flex", flexDirection:"column", color:"white", alignItems: "center", margin: "2% 25% 1% 25%"}} key={elem.id}>
                        <div>
                        <h2 style={{margin:"2% 0 0% 0", display:"flex", justifyContent:"center"}}>{elem.guide_name}</h2>
                        </div>

                        <div style={{margin:".5% 0 2% 0", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <em style={{color:"#FFBA08"}}>{elem.category}</em>
                        </div>

                        <div style={{margin:"0 2% 0 2%"}}>
                            <p>
                                <span style={{fontWeight:"bold",}}> Description: </span> 
                                {elem.description}
                            </p>
                        </div>

                        <div style={{margin:"0 2% 0 2%"}}>
                            <h5><span style={{fontWeight:"bold"}}>Level of Difficulty: </span> {elem.score}</h5>
                        </div>

                    </div>
                )
            })} 
        </div>
    )

}


export default FeedItem;


