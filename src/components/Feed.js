import React, { useEffect, useState } from 'react'
import axiosWithAuth from './axiosWithAuth';
import axios from 'axios';
import FeedItem from './FeedItem';

const Feed = () => {

	const [guides, setGuides] = useState([{id:"", guide_name:""}])

    useEffect(() => {
        axios
        .get("https://how-to-3.herokuapp.com/api/guides")
        .then(res => {
			console.log("my response :", res.data)
			setGuides(res.data)
		})
        .catch( error => {console.log("error getting guides :", error)})
    },[])
	
    return (
		<>
		{console.log("my guides: ", guides)}
            <div className="feed-header-container" style={{color:"white", display: "flex", flexDirection:"column", alignItems: "center", margin: "2% 2% 1% 2%"}}>
            <h1>How-To Feed</h1>
            </div>
			{
			guides.length > 0 ? 
			<FeedItem guides={guides} /> 
			: 
			<div>Loading...</div>
			}
		</>
    )
}

export default Feed;