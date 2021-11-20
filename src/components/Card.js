import {GrClose, GrPaint} from 'react-icons/gr'
import { useEffect, useState } from 'react'

let colors = {
    "red": "#FFB2B2",
    "blue": "#C2E8FE",
    "yellow": "#FEFEAF",
    "green": "#C2FEC9",
    "pink": "#F5D7FD",
    "white": "#FCFCFC"
}

const Card = ({card = {id: 0, title: "", color: "yellow"}, removeCard = () => {}, switchColor = () => {}, switchText = () => {}}) => {
    const [text, setText] = useState(card.title);

    function changed(e) {
        setText(e.target.value)
    }

    return (
        <div className="card" style={{
            backgroundColor: colors[card.color]
        }}>
            <textarea className="textarea" type="text" 
            onFocus={(e) => setText(card.title)}
            onBlur={(e) => switchText(card.id, e.target.value)}
            onChange={(e) => setText(e.target.value)}
            value={text}
            ></textarea>
            <div className="iconcross">
                <GrClose style={{cursor: "pointer"}} onClick={() => {removeCard(card.id) }} />
                <GrPaint style={{marginLeft: "8px", cursor: "pointer"}} onClick={() => switchColor(card.id)} />
            </div>
        </div>
    );
}

export default Card;