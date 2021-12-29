import { noteService } from "../services/note.service.js";
import { NoteList } from "../cmps/note-list.jsx";
console.log('i')
const { Link } = ReactRouterDOM;

export class NoteApp extends React.Component {
    state = {
        notes: null
    };
    
    componentDidMount()  {
        this.loadNotes();
    }
    
    loadNotes = () => {
        const { filterBy } = this.state;
        noteService.query(filterBy)
        .then((notes) => {
            this.setState({notes})
        })


    }
    
    render() {
        const {notes} = this.state;
        if(!notes) return <h1>notes not found</h1>
        return (
            <section className="note-container">
                <h1>hi</h1>
                <NoteList notes = {notes}/>
            </section>
        )
    }
}