import { noteService } from "../services/note.service.js";
import { NoteList } from "../cmps/note-list.jsx";

const { Link } = ReactRouterDOM;

export class NoteApp extends React.Component {
    state = {
        notes: null
    };
    
    componentDidMount()  {
        this.loadNotes();
    }
    
    loadNotes = () => {
        this.setState({notes});
        console.log(notes)

    }
    
    render() {
        const {notes} = this.state;
        if(!notes) return;
        return (
            <section className="note-container">
                <NoteList notes = {this.notesToDisplay}/>
            </section>
        )
    }
}