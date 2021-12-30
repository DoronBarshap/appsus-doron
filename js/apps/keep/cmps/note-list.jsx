import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes, onRemoveNote }) {
  // console.log(notes)
  if (!notes.length) return <h1>no notes</h1>;
  return (
    <section className="note-list">
      {notes.map((note) => (
        <NotePreview onRemoveNote={onRemoveNote} key={note.id} note={note} />
      ))}
    </section>
  );
}
