import { NoteList } from "../cmps/NoteList.jsx"
import { NoteAdd } from "../cmps/NoteAdd.jsx"
import { noteService } from "../services/note.service.js"


export class NoteApp extends React.Component {

    state = {
        notes: []
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.query().then((notes) => this.setState({ notes }))
    }

    onDeleteNote = (noteId) => {
        noteService.deleteNote(noteId).then(() => {
            this.loadNotes()
        })
    }
    onAddNote = (note) => {
        noteService.addNote(note).then(() => {
            this.loadNotes()
        })
    }

    onChangeColor = (ev, id) => {
        const color = ev.target.value
        noteService.changeColor(color, id).then(() => {
            this.loadNotes()
        })
    }

    onUpdateNote = (ev, id) => {
        const color = ev.target.value
        noteService.updateNote(color, id).then(() => {
            this.loadNotes()
        })
    }

    onTogglePin = (ev, id) => {
        noteService.togglePin(ev.target.checked, id).then(() => {
            this.loadNotes()
        })
    }

    onDuplicate = (noteId,note) => {
        noteService.duplicate(noteId,note).then(() => {
            this.loadNotes()
        })
    }

    render() {
        const { notes } = this.state;
        return (
            <section className="note-app">
                <NoteAdd onAddNote={this.onAddNote} />
                <NoteList notes={notes} onDeleteNote={this.onDeleteNote} onChangeColor={this.onChangeColor} onUpdateNote={this.onUpdateNote}
                    onTogglePin={this.onTogglePin} onDuplicate={this.onDuplicate} />
            </section>
        )
    }
}