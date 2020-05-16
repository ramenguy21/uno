import React from 'react'
import socket from '../Config/socket-config'

class Chat extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            chatbox: 'Message all players ...',
            msgLog : ['']
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        socket.on('chatmsg', (msg) => {
            var intArr = this.state.msgLog.concat(msg)
            this.setState({
                msgLog : intArr
            })
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
        var msgList = this.state.msgLog.map((msgContent) => 
            <li>{msgContent}</li>
        );
        return (
            <div>
                <ul>{msgList}</ul>
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.chatbox} onChange={this.handleChange} />
                    <input className="py-2 rounded ml-2 px-5 bg-blue-500 hover:bg-blue-700 text-white font-bold" type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default Chat