// MAP THROUGH API DATA + DISPLAY ALL TO-DO ITEMS IN CARDS 
// IF USER === CREATOR -> LET USER ACCESS PRIVATE 'UPDATE/DELETE' ROUTE WHEN CLICKING ICON ON CARD
// IF USER !== CREATOR -> REDIRECT USER TO /DASHBOARD + DISPLAY ERROR-> (UNABLE TO UPDATE/DELETE -- USER IS NOT A CREATOR)
// SEARCH BAR TO FILTER THROUGH CONTENT



//HOW-TO COLLETION (TITLE/HEADER)

//SEARCH! _______ (use .filter((elem) => {})) --filters data to display only what you're searching for

//<BUTTON> -- (PrivateRoute to CreatorForm) IF USER !== CREATOR -> DISPLAY:NONE OR REDIRECT TO /DASHBOARD
// Create a How-To!
//</BUTTON>

//.map((elem) => {
//     <div>
//         <p>{elem}</p>
//         <p>{elem}</p>
//         <p>{elem}</p>
//         <p>{elem}</p>
//     </div>
// })

import { Switch, Route } from 'react-router-dom'

import React, { useState, useEffect } from 'react';
import CreatorForm from './CreatorForm';
import UpdatePost from './UpdatePost';
import axios from 'axios';



const Dashboard = () => {




    
    return (
        // <h1>Display items they'v saved + items they'v created</h1>
        // Let them edit the cards to change the info 
        // <div>
        //     <div className="card-container">
        //         {data.map(elem => {
        //             return (
        //                 <div className="card">
        //                     {/* cards */}
        //                     <h1>Name</h1>
        //                     <h3>Description</h3>
        //                     <button className="edit-button">Edit</button>
        //                 </div>
        //             )
        //         })}
                
                
            // </div>
            
            <h1>dashboard</h1>
            
        //     <CreatorForm />
        // </div>
    )
}

export default Dashboard