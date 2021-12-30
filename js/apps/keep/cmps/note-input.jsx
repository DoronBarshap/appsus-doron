export function DynamicNoteInput({ noteType, handleInputSubmit }) {
  let placeholder;
  switch (noteType) {
    case "note-txt":
      placeholder = "Enter text here";
      break;
    case "note-img":
      placeholder = "Enter image URL";
      break;
    case "note-video":
      placeholder = "Enter video URL";
      break;
    case "note-todo":
      placeholder = "Enter todo-list ";
      break;
    default:
      placeholder = "Error";
      break;
  }

  return (
    <input
      name={noteType}
      placeholder={placeholder}
      onKeyDown={handleInputSubmit}
    />
  );
}
