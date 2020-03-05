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
            <div className="feed-header-container">
            <div style={{display:"flex", justifyContent:"space-between", margin: "0% 25% 0 25%", }}>
				<h1 style={{color:"white", margin: "3% 0 1.5% 0"}}>How-To Feed</h1>
				<div style={{margin:"3% 0 0 0"}}>
					<h5 style={{color:"white",}}><Link to ="/login" style={{color:"white",}}>Log In/Register</Link> to Create a Post</h5>
					<h6 style={{color:"white", margin:"0 0 0 20px"}}><Link to ="/dashboard" style={{color:"white",}}><span style={{color:"#FFBA08",}}>My Dashboard</span></Link> (<span style={{textDecoration:"underline"}}>must</span> be logged in)</h6>
				</div>
			</div>

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