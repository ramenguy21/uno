import React from 'react'


class Chat extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        var m_chatlog = [];//add last 8 messages to this list
        for (var i = 0; i < 8; i++) {
            m_chatlog.push(<li key={i}>{i}</li>);
        }

        return(
            <div>
                <ul>{m_chatlog}</ul>
                <form>
                    <textarea placeholder="Message all players"></textarea>
                    <button className="py-2 rounded ml-2 px-5 bg-blue-500 hover:bg-blue-700 text-white font-bold">Send</button>
                </form>
            </div>
        )
    }
    
}

export default Chat