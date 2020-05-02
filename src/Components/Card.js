import React from 'react';
import "./local.css"

class Card extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={(this.props.selectable ? 'selectable' : '')}>
                <div className="rounded flex justify-between items-strech playingCard">
                    <h1 className="p-2 self-start text-left">1</h1>
                    <div className="self-center flex items-center justify-center display-circle">
                        <div className="inner-circle flex items-center justify-center">
                            <h1>1</h1>
                        </div>
                    </div>
                    <h1 className="p-2 self-end text-right">1</h1>
                </div>
            </div>
        )
    }
}

export default Card