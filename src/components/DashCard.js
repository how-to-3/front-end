import React, { useState, useEffect, Component} from 'react';
import axiosWithAuth from 'axiosWithAuth';
import { useParams } from 'react-router-dom'



export default class FeedCard extends Component{
        // const [howTo, setHowTo] = useState()
        constructor(props){
          super(props); 
          this.state = {
            guide_name: "",
            category:"",
            description:"",
            score:""
          }
        }
        const { id } = useParams(); 

        Componentdidmount() {
          console.log("My mounting prop",props)
          this.fetchCard(this.props.match.params.id)
         
        }

          fetchCard = id => {
            axiosWithAuth(
              .get(`https://how-to-3.herokuapp.com/api/guides/${id}`)
              .then(res => 
                this.setState({ 
                  guide_name: res.data.guide_name,
                  category: res.data.category,
                  description:res.data.description,
                  score: resizeBy.data.score }))
              .catch(error => console.log("error", error));
            )
          };
    
        const { guide_name, category, description,score } = howTo;

        
          render(){
          if (howTo.length > 0)
          {
            return(
                <div className="save-wrapper">
                <div className="howTo-card">
                  <h2>{guide_name}</h2>
                  <div className="category">
                    Category: <strong>{category}</strong>
                  </div>
                  <div className="description">
                    description: <em>{description}</em>
                  </div>
                  <div className="score">
                    score: <em>{score}</em>
                  </div>
                  ))}
                </div>
                <div className="save-button">Save</div>
                <div className ="update-post">Update</div>
                <div classNme="delete-post">Delete</div>
              </div>
            )

          } else {
                return(
                <div>Loading...</div>
           )
      }
    }
}
}