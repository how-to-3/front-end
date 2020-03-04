import React, { useState } from 'react';
import { Link } from 'react-router-dom'





const HowToDetails = (  {howTo} ) => {
   // const [howTo, setHowTo] = useState({guide_name: "", category: "", description: "", score: "", id: ""})
    const { guide_name, category, description, score, id  } = howTo; 
    console.log("individual card",howTo)
    return (
      <Link to = {`/Guides/${id}`}>
      <div className="howTo-card">
        <h2> name: {guide_name}</h2>
        <div className="category">
          category: <em>{category}</em>
        </div>
        <div className="howTo-description">
          description: <strong>{description}</strong>
        </div>
        <div className="score">
          score: <strong>{score}</strong>
        </div>
      </div>
      </Link>
    );
   }

  export default HowToDetails