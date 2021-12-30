import { NotePreview } from "./note-preview.jsx";



export function NoteList({notes}){
    // console.log(notes)
    if(!notes.length) return <h1>no notes</h1>
    return (
        <section className="note-list">
            {notes.map(note => <NotePreview key={note.id} note={note} />)}
        </section>
    )
}