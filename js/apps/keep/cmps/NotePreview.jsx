export function NotePreview({ note, onDeleteNote, onChangeColor, onUpdateNote, onTogglePin, onDuplicate }) {
    return (
        <div className="note-preview" style={{ backgroundColor: note.style.backgroundColor }}>
            <textarea onChange={(ev) => {
                onUpdateNote(ev, note.id)
            }} className="filter-txt" id="" cols="26" rows="4" style={{ backgroundColor: note.style.backgroundColor }}>{note.info.txt}</textarea>
            <img className='img-preview' src={note.info.url} />
            <div className="note-btn">
                <button className="fa fa-trash" aria-hidden="true" onClick={() => { onDeleteNote(note.id) }}></button>
                <input type="color" className="color-preview" onChange={(ev) => { onChangeColor(ev, note.id) }} />
                <input type="checkbox" onChange={(ev) => { onTogglePin(ev, note.id) }}/>
                <button className="fa fa-files-o" onClick={() => onDuplicate(note.id)}></button>
            </div>
        </div>
    )
}