export function DynamicNoteInput({ noteType, handleInputSubmit }) {
    let placeholder;
    switch (noteType) {
        case 'NoteText':
            placeholder = "Enter text here"
            break;
        case 'NoteImg':
            placeholder = "Enter image URL"
            break;
        case 'NoteVideo':
            placeholder = "Enter video URL"
            break;
        case 'NoteTodos':
            placeholder = "Enter todo-list "
            break;
        default:
            placeholder = 'Error';
            break;
    }

    return (
        <input name={noteType} placeholder={placeholder} onKeyDown={handleInputSubmit} />
    )
}