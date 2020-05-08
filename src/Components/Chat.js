import React from 'react'
import io from 'socket.io-client'

var socket = io('http://localhost:8080/');


class Chat extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            chatbox: 'Message all players ...',
            msgLog : ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        socket.on('chatmsg', (msg) => {
            this.setState({
                msgLog : msg
            })
            console.log(msg)
        })
    }

    handleChange(e) { 
        this.setState({ chatbox: e.target.value }); 
    }

    handleSubmit(e) {
        e.preventDefault()
        socket.emit('chatmsg', this.state.chatbox);
        this.setState({
            'chatbox' : ''
        })

    }

    render() {
        var m_chatlog = [];//add last 8 messages to this list
        for (var i = 0; i < this.state.msgLog.length; i++) {
            m_chatlog.push(<li key={i}>this.state.msgLog</li>);
        }

        return (
            <div>
                <ul>{this.state.msgLog}</ul>
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.chatbox} onChange={this.handleChange} />
                    <input className="py-2 rounded ml-2 px-5 bg-blue-500 hover:bg-blue-700 text-white font-bold" type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default Chat