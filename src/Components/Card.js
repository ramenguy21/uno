import React from 'react';
import "./local.css"

const Card = (props) => (
    <div className={(props.selectable ? 'selectable' : '')}>
        <div className={(props.cardSuit)}>
            <div className="rounded flex justify-between items-strech playingCard">
                <h1 className="p-2 self-start text-left">{props.cardValue}</h1>
                <div className="self-center flex items-center justify-center display-circle">
                    <div className="inner-circle flex items-center justify-center">
                        <h1>{props.cardValue}</h1>
                    </div>
                </div>
                <h1 className="p-2 self-end text-right">{props.cardValue}</h1>
            </div>

        </div>
    </div>
)

export default Card