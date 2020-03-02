import React from 'react'

const testData = [
	{
		id: 0,
		title: 'The Godfather',
		description: 'Francis Ford Coppola',
		creator: 'Marlon Brando',
	    difficulty: 10,
	},
	{
		id: 1,
		title: 'Star Wars',
		description: 'George Lucas',
		creator: 'Mark Hamill',
	    difficulty: 9.2,
	},
	{
		id: 2,
		title: 'The Lord of the Rings: The Fellowship of the Ring',
		description: 'Peter Jackson',
		creator: 'Elijah Wood',
	    difficulty: 9.2,
	},
	{
		id: 3,
		title: 'Terminator 2: Judgement Day',
		description: 'James Cameron',
		creator: 'Arnold Schwarzenegger',
	    difficulty: 9.4,
	},
	{
		id: 4,
		title: 'Dumb and Dumber',
		description: 'The Farely Brothers',
		creator: 'Jim Carrey',
	    difficulty: 7.6,
	},
	{
		id: 5,
		title: 'Tombstone',
		description: 'George P. Cosmatos',
		creator: 'Kurt Russell',
	    difficulty: 8.9,
	},
];


const Feed = () => {
    console.log(testData)
    return (
        <div >
            <div className="feed-header-container" style={{color:"white", display: "flex", flexDirection:"column", alignItems: "center", margin: "2% 2% 1% 2%"}}>
            <h1>How-To Feed</h1>
            </div>
                {testData.map(elem => {
                    return (
                        <div style={{margin:"0 25% 0 25%", justifyItems:"center", border:"5px solid white", display:"flex", flexDirection:"column", color:"white"}}>
                            <h2>Name: {elem.title}</h2>
                            <h4>Description: {elem.description}</h4>
                            <h5>Creator: {elem.creator}</h5>
                            <h6>Difficulty: {elem.difficulty}</h6>
                        </div>
                    )
                })
                }
            
        </div>
    )
}

export default Feed;