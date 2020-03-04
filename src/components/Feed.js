import React, { useEffect, useState } from 'react'
import axiosWithAuth from './axiosWithAuth';
import FeedItem from './FeedItem';
import { Link, Switch } from 'react-router-dom';
import Login from './Login';
import { Spinner } from 'reactstrap';

const Feed = () => {

	const [guides, setGuides] = useState([{id:"", guide_name:""}])

    useEffect(() => {
        axiosWithAuth()
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
			<h5><Link to ="/login" style={{color:"white"}}>Log In/Register</Link> to Create a Post</h5>
            </div>
			{
			guides.length > 0 ? 
			<FeedItem guides={guides} /> 
			: 
			<div style={{margin:"7.5% 0 7.5% 0", color:"white", display:"Flex", alignItems:"center", flexDirection:"column",}}>
				<h4>Loading ...</h4>
				<Spinner color="dark" />
			</div>
			}
		</>
    )
}

export default Feed;