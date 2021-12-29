import { noteService } from "../services/note.service.js";
const { Link } = ReactRouterDOM

export function NotePreview({note}){
    return (
        <Link className="clean-link" to={`/note/${note.id}`}>
            <article className="note-preview">
                <div>XXXX</div>
            </article>
        </Link>
    )
    
}

