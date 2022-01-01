import { noteService } from "../services/note.service.js";
import { NotePreview } from "../cmps/note-preview.jsx";
import { NoteList } from "../cmps/note-list.jsx";
import { AddNote } from "../cmps/add-note.jsx";
// const { Link } = ReactRouterDOM;

export class NoteApp extends React.Component {
  state = {
    notes: null,
    pinnedNotes: [],
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    noteService.query().then(notes => {
      this.setState({ notes });
    });

    noteService.setPinnedNotes().then(pinnedNotes => {
      this.setState({pinnedNotes});
    })
  };

  onRemoveNote = (noteId) => {
    noteService.removeNote(noteId)
    .then(this.loadNotes);
  };

  onDuplicateNote = (noteId) => {
    noteService.duplicateNote(noteId)
    .then(this.loadNotes);
  }

 
  onChangeColor = (noteId, color) => {
    noteService.changeColor(noteId, color)
    .then(this.loadNotes)
  }

  onTogglePin = (noteId) => {
    noteService.togglePin(noteId)
    .then(this.loadNotes);
  }
 

  render() {
    const { notes, pinnedNotes } = this.state;
    if (!notes) return <h1>notes not found</h1>;
    return (
      <section className="note-container">
        <h1>My notes</h1>
        <AddNote loadNotes={this.loadNotes} />
        <NoteList 
        notes={notes} 
        pinnedNotes={pinnedNotes}
        onRemoveNote={this.onRemoveNote}
        onDuplicateNote={this.onDuplicateNote}
        onChangeColor={this.onChangeColor}
        onTogglePin={this.onTogglePin}
         />
      </section>
    );
  }
}
