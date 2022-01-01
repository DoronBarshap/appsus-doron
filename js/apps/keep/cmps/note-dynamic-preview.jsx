import { noteService } from "../services/note.service.js"


export const dynamicService = {
    NoteDynamicPreview,
    editNote
    
}


function NoteDynamicPreview ({note}) {
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



export function editNote({note, onRemoveNote, onDuplicateNote, onChangeColor}) {
    // console.log(note)
    return (
        <div>
            <div className="edit-note">
            <button className="edit-btn" onClick={() => onChangeColor(note.id)}>C</button>
            <button className="edit-btn" onClick={() => onRemoveNote(note.id)}>X</button>
            <button className="edit-btn" onClick={() => onDuplicateNote(note.id)}>D</button>
            </div>
        </div>
        )
}