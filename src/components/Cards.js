import Card from './Card'

function Cards(props) {
    return (<>
    {props.notes.map((note) => <Card title={note.title} color={note.color}></Card>)}
    </>);
}

export default Cards;