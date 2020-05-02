import React from 'react'
import Chat from './Chat'


class InfoBoard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="max-w-sm rounded overflow-hidden">
                <div>
                    <ul>
                        <li>Player 1</li>
                        <li>Player 2</li>
                    </ul>
                </div>
                <Chat></Chat>
            </div>
        )
    }
}

export default InfoBoard