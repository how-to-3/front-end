// CREATE HOW-TO FORM FOR CREATING NEW HOW-TO'S
// WHEN FORM SUBMITS -> REDIRECT TO UPDATED /DASHBOARD

/* <FORM>
        <LABEL>*What is the to how-to thing?*</LABEL>
        <INPUT 
        />

        <LABEL>*How do i do the how-to thing?*</LABEL>
        <INPUT 
        />

        <LABEL>*Further explanation:*</LABEL>
        <INPUT 
        />

        <LABEL>*Who wrote the how-to thing?*</LABEL>
        <INPUT 
        />

        <BUTTON>SUBMIT NEW HOW-TO!</BUTTON>
</FORM> */

import React from 'react';

const CreatorForm = () => {
        return ( 
                <div className="new-card-container" style={{margin:"0 25% 0 25%", display: "flex", alignItems: "center", flexDirection:"column", border:"5px solid white"}}>
                        <h1 style={{color:"white"}}>Create a New How-To</h1>
                        <form style={{width:"25%",color:"white", display:"flex", flexDirection:"column"}}>
                                <label>Name of How-To Item</label>
                                <input 
                                />
                                
                                <label>How Do You Do It?</label>
                                <input 
                                />
                                
                                <label>Who Discovered This?</label>
                                <input 
                                />

                                <label>Difficulty Level:</label>
                                <input 
                                type="number"
                                />

                                <button style={{borderRadius:"5px", margin: "5% 0 5% 0"}} type="submit">Add</button>
                        </form>
                </div>
        )
}

export default CreatorForm; 