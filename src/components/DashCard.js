import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'


const FeedCard = (props) => {
        const [howTo, setHowTo] = useState(); 
        const { id } = useParams(); 

        useEffect(() => {

                axios.get(`https://how-to-3.herokuapp.com/api/guides/${id}`)
                .then(response => {
                        setHowTo(response.data)
                })
                .catch(error => {
                        console.log(error);
                })
        }, [id]);

        const { title, category, author, guides } = card;
        return (
                <div className="save-wrapper">
                <div className="howTo-card">
                  <h2>{title}</h2>
                  <div className="author">
                    Author: <em>{author}</em>
                  </div>
                  <div className="movie-metascore">
                    Category: <strong>{category}</strong>
                  </div>
                  {guides.map(guide => (
                    <div key={guide} className="guide-card">
                      {guide}
                    </div>
                  ))}
                </div>
                <div className="save-button">Save</div>
                <div className ="update-post">Update</div>
                <div classNme="delete-post">Delete</div>

              </div>
        )
}

export default FeedCard 