export function NotePreview({ note, onDeleteNote, onChangeColor, onUpdateNote }) {
    return (
        <div className="note-preview" style={{ backgroundColor: note.style.backgroundColor }}>
            <textarea onChange= {(ev)=>{
                onUpdateNote(ev,note.id)
            }}className="filter-txt" id="" cols="30" rows="5" style={{ backgroundColor: note.style.backgroundColor }}>{note.info.txt}</textarea>
            <img className='img-preview' src={note.info.url} />
            <div>
                <button onClick={() => { onDeleteNote(note.id) }}>🚫</button>
                <input type="color" onChange={(ev) => { onChangeColor(ev, note.id) }} />
                {/* <input type="checkbox" /> */}
            </div>
        </div>

    )
}