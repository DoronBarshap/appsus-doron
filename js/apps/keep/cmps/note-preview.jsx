import { noteService } from "../services/note.service.js";
const { Link } = ReactRouterDOM

// export function NotePreview({note}){
//     return (
//         <Link className="clean-link" to={`/note/${note.id}`}>
//             <article className="note-preview">
//                 <div></div>
//             </article>
//         </Link>
//     )
    
// }

export class NotePreview extends React.Component {
    state ={
        note:null,
        noteStyle:{}
    }

    componentDidMount(){
        const note = this.props.note;
        this.setState({note})
    }
    render() {
        const { note } = this.state;
        if(!note) return <h2>no notes</h2>
        return (
            <article className="note-preview">
                <NoteEdit
                note = {note} />
            </article>
        )
    }
}