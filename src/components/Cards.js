import Card from './Card'

function Cards(props) {
    return (<>
    {props.notes.map((note) => <Card 
    card={note}
    removeCard={props.removeCard} 
    switchColor={props.switchColor}
    switchText={props.switchText}></Card>)}
    </>);
}

export default Cards;