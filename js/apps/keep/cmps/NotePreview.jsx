export function NotePreview({ note, onDeleteNote, onChangeColor, onUpdateNote, onTogglePin, onDuplicate }) {
    return (
        <div className="note-preview" style={{ backgroundColor: note.style.backgroundColor }}>
            <textarea onChange={(ev) => {
                onUpdateNote(ev, note.id)
            }} className="filter-txt" id="" cols="30" rows="4" style={{ backgroundColor: note.style.backgroundColor }}>{note.info.txt}</textarea>
            <img className='img-preview' src={note.info.url} />
            <div className="note-btn">
                <button className="btn btn-delete" onClick={() => { onDeleteNote(note.id) }}>X</button>
                <input type="color" className="color-preview" onChange={(ev) => { onChangeColor(ev, note.id) }} />
                <input type="checkbox" onChange={(ev) => { onTogglePin(ev, note.id) }} />
                <button className="btn-duplicate" onClick={() => onDuplicate(note.id)}><img className="duplicate" src="img/duplicate.png" alt="" /></button>
            </div>
        </div>
    )
}