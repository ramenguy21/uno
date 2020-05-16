import React from 'react'
import Card from './Card'

class Deck extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(           
            <div>{/*flex flex-col justify-center*/}            
                <Card cardSuit="red" cardValue="7"></Card>
                <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Draw</button>               
            </div>
        )
    }
}

export default Deck;