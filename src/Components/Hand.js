import React from 'react'
import Card from './Card'

class Hand extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        var m_cards = [];
        for (var i = 0; i < 8; i++) {
            // note: we add a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
            m_cards.push(<Card selectable={ true }  key={i} />);
        }
        return <div className="mt-5 flex justify-center">{m_cards}</div>;
    }
}

export default Hand