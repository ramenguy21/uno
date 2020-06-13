import React from 'react'
import socket from '../Config/socket-config'

class LobbyView extends React.Component {

    constructor(props){
        super(props)
        this.handleRoute = this.handleRoute.bind(this);
    }

    handleRoute(e) {
        socket.emit('createRoom');
    }

    render(){
        return(
            <>
            <div>
                <h1>Create a Game</h1>
                <button className='bg-blue-500 hover:bg-blue-700 px-5 p-2 text-white rounded'>Create</button>
            </div>
            <h2>OR</h2>
            <div>
                <h1>Join an existing lobby</h1>
                <input placeholder='Enter the lobby code'></input>
                <button onClick={this.handleRoute} className='bg-blue-500 hover:bg-blue-700 px-5 p-2 text-white rounded'>Join</button>
            </div>
            </>
        )
    }
}

export default LobbyView