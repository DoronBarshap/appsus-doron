import { noteService } from "../services/note.service.js";
import { NoteList } from "../cmps/note-list.jsx";
import { AddNote } from "../cmps/add-note.jsx";
// const { Link } = ReactRouterDOM;

export class NoteApp extends React.Component {
    state = {
        notes: null
    };
    
    componentDidMount()  {
        this.loadNotes();
    }
    

    loadNotes = () => {
        noteService.query().then((notes) => {
            this.setState({ notes });
          })
    }

    onRemoveNote = (note) => {
        noteService.removeNote(note.id).then(this.loadNotes())
    }

    // onRemoveNote = () => {
    //     console.log('hi')
    //     noteService.removeNote(this.state.notes.id)
    //     .then(this.loadNotes);
    // }
    
    render() {
        const {notes} = this.state;
        if(!notes) return <h1>notes not found</h1>
        return (
            <section className="note-container">
                <h1>My notes</h1>
                <AddNote loadNotes={this.loadNotes}/>
                <NoteList 
                notes = {notes}
                onRemoveNote={this.onRemoveNote}/>
                
            </section>
        )
    }
}