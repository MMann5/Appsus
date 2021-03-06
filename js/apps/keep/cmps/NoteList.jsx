import { NotePreview } from './NotePreview.jsx'
export function NoteList({ notes, onDeleteNote, onChangeColor,onUpdateNote,onTogglePin,onDuplicate }) {
    return (
        <div className='note-list'>
            {notes.map((note) => (
                <NotePreview key={note.id} note={note} onDeleteNote={onDeleteNote} onChangeColor={
                    onChangeColor} onUpdateNote={onUpdateNote}  onTogglePin={onTogglePin} onDuplicate={onDuplicate}/>))}
        </div>
    );
}