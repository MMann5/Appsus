import { NotePreview } from './NotePreview.jsx'
export function NoteList({ notes, onDeleteNote, onChangeColor }) {
    return (
        <div className='note-list'>
            {notes.map((note) => (
                <NotePreview key={note.id} note={note} onDeleteNote={onDeleteNote} onChangeColor={
                    onChangeColor} />))}
        </div>
    );
}