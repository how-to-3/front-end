import React from 'react';


const FeedItem = (props) => {
    return (
        <div>
            {props.guides.map(elem => {
                return (
                    <div style={{backgroundColor:"#343A40", margin:"2% 25% 0% 25%", boxShadow:"1px 1px 10px 2px #202020", display:"flex", alignItems:"center", justifyContent:"space-between"}} key={elem.id}>
                        <div>
                            <div style={{ backgroundColor:"#343A40",  display:"flex", flexDirection:"column", color:"white", alignItems: "flex-start", padding: "1%"}} >
                            <h2 style={{margin:"2% 0 0% 2%", display:"flex", justifyContent:"center"}}>{elem.guide_name}</h2>
                            </div>

                            <div style={{margin:".5% 0 2% 3%", display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
                                <em style={{color:"#FFBA08"}}>{elem.category}</em>
                            </div>

                            <div style={{ margin:"0 0 0 2%", display:"flex", flexDirection:"column", color:"white", alignItems: "flex-start", padding: "1%"}}>
                                <p>
                                    <span style={{fontWeight:"bold",}}> Description: </span> 
                                    {elem.description}
                                </p>
                            </div>
                        </div>
                        <div style={{color:"white", margin:"0 2% 0 2%", display:"flex", flexDirection:"column", justifyItems:"flex-end"}}>
                            <h5 style={{fontSize:"3rem", margin:"0 0 0 35px" }}>{elem.score}</h5>
                            <h5 style={{fontWeight:"bold", fontSize:"1.5rem",}}>Difficulty</h5>
                        </div>
                        </div>

                )
            })} 
        </div>
    )

}


export default FeedItem;


