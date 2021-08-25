export function NotePreview({ note, onDeleteNote, onChangeColor }) {
    return (
        <div className="note-preview" style={{ backgroundColor: note.style.backgroundColor }}>
            <h4 className='note-txt'>{note.info.txt}</h4>
            <img className='img-preview' src={note.info.url} />
            <p>{note.text}</p>
            <div>
                <button onClick={() => { onUpdate(note.id) }}>Update</button>
                <button onClick={() => { onDeleteNote(note.id) }}>Remove</button>
                <input type="color" onChange={(ev) => { onChangeColor(ev,note.id) }} />
                <input type="checkbox" />
            </div>
        </div>

    )
}