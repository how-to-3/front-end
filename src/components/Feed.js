import React from 'react'


const Feed = () => {
    console.log(testData)
    return (
        <div >
            <div className="feed-header-container" style={{color:"white", display: "flex", flexDirection:"column", alignItems: "center", margin: "2% 2% 1% 2%"}}>
            <h1>How-To Feed</h1>
            </div>
                {testData.map(elem => {
                    return (
                        <div style={{margin:"0 25% 0 25%", justifyItems:"center", border:"5px solid white", display:"flex", flexDirection:"column", color:"white"}}>
                            <h2>Name: {elem.title}</h2>
                            <h4>Description: {elem.description}</h4>
                            <h5>Creator: {elem.creator}</h5>
                            <h6>Difficulty: {elem.difficulty}</h6>
                        </div>
                    )
                })
                }
            
        </div>
    )
}

export default Feed;