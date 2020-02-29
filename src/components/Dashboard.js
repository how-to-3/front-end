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
import React from 'react';

const Dashboard = () => {
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard