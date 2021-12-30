import { noteService } from "../services/note.service.js"


export const dynamicService = {
    NoteDynamicPreview,
    
}


function NoteDynamicPreview ({note}) {
    // console.log(note)
    if (!note || note && !note.info) return null;
    return (
        <div className="note-box">
            {note.info.title && <h3>{note.info.title}</h3>}
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


