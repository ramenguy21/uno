import React from 'react'
import Card from './Card'
import socket from '../Config/socket-config'


class Hand extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        socket.emit('pass_turn');
    }

    render() {
        var m_cards = [];
        for (var i = 0; i < 8; i++) {
            // note: we add a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
            m_cards.push(<Card cardValue="8" cardSuit="wild " selectable={true} key={i} />);
        }
        return (
            <div>
                <button onClick={this.handleClick} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pass Turn</button>
                <div className="mt-5 flex justify-center">{m_cards}</div>
            </div>);
    }
}

export default Hand