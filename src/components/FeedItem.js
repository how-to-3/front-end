import React from 'react';


const FeedItem = (props) => {
    return (
        <div>
            {props.guides.map(elem => {
                return (
                    <div key={elem.id}>
                        {elem.guide_name}
                        {elem.catagory}
                    </div>
                )
            })} 
        </div>
    )

}


export default FeedItem;


