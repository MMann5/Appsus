import {NotePreview} from "./NotePreview.jsx"
export function NoteList({notes}) {
    console.log(notes);
    return (<div><h1>2</h1></div>)
    // return (
    //     <section className="notes-list">
    //         {notes.map(note => (
    //             <NotePreview key={note.id} note={note} onRemoveNote={this.props.onRemoveNote}/>
    //         ))}
    //     </section>
    // );
}