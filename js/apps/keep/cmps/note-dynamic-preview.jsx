import { noteService } from "../services/note.service.js"
import { NoteColors } from "./note-colors.jsx";


export const dynamicService = {
    NoteDynamicPreview,
    editNote
    
}


export function NoteDynamicPreview ({note}) {
    // console.log(note)
    if (!note || note && !note.info) return null;
    return (
        <div className="note-box">
            {note.info.title && <h2>{note.info.title}</h2>}
            {note.info.url && <img src={note.info.url} />}
            {note.info.video && <iframe src={note.info.video} width="100%" height="200" />}
            <div className="note-content">
                <p>{note.info.txt}</p>
                <ul>
                    {note.info.todos.map(todo => <li key={todo.id}>{todo.txt}</li>)}
                </ul>
            </div>
        </div>
    );
}



function editNote({note, onRemoveNote, onDuplicateNote, onChangeColor, onTogglePin}) {
    return (
        <div>
            <div className="edit-note">
            <NoteColors className="edit-btn" noteId={note.id} onChangeColor={onChangeColor}/>
            <button className="edit-btn" onClick={() => onTogglePin(note)}><i className="fas fa-thumbtack"></i></button>
            <button className="edit-btn"><i className="far fa-edit"></i></button>
            <button className="edit-btn" onClick={() => onDuplicateNote(note.id)}><i className="fas fa-clone"></i></button>
            <button className="edit-btn" onClick={() => onRemoveNote(note.id)}><i className="fas fa-trash-alt"></i></button>
            <button className="edit-btn"><i className="fas fa-envelope-open-text"></i></button>
            </div>
        </div>
        )
}