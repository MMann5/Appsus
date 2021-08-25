import { NoteFilter } from '../cmps/NoteFilter.jsx';
import { NoteList } from '../cmps/NoteList.jsx';
import { notesService } from '../services/note.service.js';
export class NoteApp extends React.Component {
  state = {
    notes: [],
    filterBy: null,
  };

  ComponentDidMount() {
    console.log('this.props: ', this.props);
    this.loadNotes();
  }

  loadNotes = () => {
    notesService
      .query(this.state.filterBy)
      .then((notes) => this.setState({ notes }));
  };

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadNotes);
  };

  onRemoveNote = (noteId) => {
    notesService.deleteNote(noteId).then(() => {
      this.loadNotes();
    });
  };

  render() {
    const { notes } = this.state;
    return (
      <section>
        <div className='header'>Notes</div>
        <NoteFilter
          filterBy={this.state.filterBy}
          onSetFilter={this.onSetFilter}
        />
        <NoteList notes={notes} onRemoveNote={this.onRemoveNote} />
      </section>
    );
  }
}
