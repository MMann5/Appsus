export function NotePreview({ note, onDeleteNote, onChangeColor, onUpdateNote }) {
    return (
        <div className="note-preview" style={{ backgroundColor: note.style.backgroundColor }}>
            {/* <h4 className='note-txt'>{note.info.txt}</h4> */}
            {/* <h4>{note.info.txt}</h4> */}
            <textarea className="filter-txt" id="" cols="30" rows="5" value={note.info.txt } style={{ backgroundColor: note.style.backgroundColor }}></textarea>
            <img className='img-preview' src={note.info.url} />
            <div>
                <button onClick={() => { onUpdateNote() }}>update</button>
                <button onClick={() => { onDeleteNote(note.id) }}>🚫</button>
                <input type="color" onChange={(ev) => { onChangeColor(ev, note.id) }} />
                <input type="checkbox" />
            </div>
        </div>

    )
}