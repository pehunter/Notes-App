import {GrClose} from 'react-icons/gr'

let colors = {
    "red": "#FFB2B2",
    "blue": "#C2E8FE",
    "yellow": "#FEFEAF",
    "green": "#C2FEC9",
    "pink": "#F5D7FD"
}

function Card({title, color}) {
    return (
        <div className="card" style={{
            backgroundColor: colors[color]
        }}>
            <textarea className="textarea" type="text">{title}</textarea>
            <div className="icon"><GrClose style={{cursor: "pointer"}} /></div>
        </div>
    );
}

export default Card;