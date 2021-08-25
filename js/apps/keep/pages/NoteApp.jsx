import { NoteList } from '../cmps/NoteList.jsx';
import{ notesService} from '../services/note.service.js'
export class NoteApp extends React.Component {
  state = {
    notes: [],
  }

  ComponentDidMount() {
    this.loadNotes()
  }

  loadNotes = () => {
    console.log('couco');}
  //   notesService.query().then((notes)=>this.setState({notes}))
  // }

  // onRemoveNote = (noteId) => {
  //   notesService.deleteNote(noteId).then(() => {
  //     this.loadNotes()
  //   })
  // }

  render() {
    const { notes } = this.state;
    return (
      <section>
        <div className="header">Notes</div>
        <NoteList notes={notes}/>
      </section>
    );
  }
}
