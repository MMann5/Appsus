import { NoteList } from '../cmps/NoteList.jsx';
import{ notesService} from '../services/note.service.js'
export class NoteApp extends React.Component {
  state = {
    notes: [],
  }

  ComponentDidMount() {
    console.log('HELLLLL');
    // this.loadNotes()
  }

  loadNotes = () => {
    console.log(notesService.query());
  }

  onRemoveNote = (noteId) => {
    notesService.deleteNote(noteId).then(() => {
      this.loadNotes()
    })
  }

  render() {
    const { notes } = this.state;
    return (
      <section>
        <div className="header">Notes</div>
        <NoteList notes={notes} onRemoveNote={this.onRemoveNote} />
      </section>
    );
  }
}
