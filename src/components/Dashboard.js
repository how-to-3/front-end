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
import axios from 'axios';



const Dashboard = props => {
    const [howTos, setHowTos] = useState([])
   
    useEffect(() => {
      const getHowTos = () => {
        axios
          .get('https://how-to-3.herokuapp.com/api/guides')
          .then(response => {
            setHowTos(response.data);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }
      
      getHowTos();
    }, []);
    


    return (
     <div className="howTo-list">
      {howTos.map(howTo => (
        <HowToDetails key={howTo.id} howTo={howTo} />
      ))}
    </div>
    )
}



export default Dashboard