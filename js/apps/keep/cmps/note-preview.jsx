import { noteService } from "../services/note.service.js";
import { dynamicService } from "./note-dynamic-preview.jsx";


export class NotePreview extends React.Component {
  state = {
    note: null,
  };

  loadNote = () => {
    const { note } = this.props

    this.setState({ note })
}

  componentDidMount() {
    const note = this.props.note;
    this.setState({ note });
    // console.log(note)
  }

  onEditNote = (noteInfo) =>{
    this.setState({note: {
      ...this.state.note, info:infoNote
    }})
  }

  // onChangeColor = (noteId, color) => {
    
  //   // const note = this.state.note
  //   // noteService.changeColor(note.id, color)
  //   // .then(this.setState({ note }))
  //   const note = this.props.note.id;
  //   noteService.changeColor(noteId, color)
  //   .then(this.setState({note}))
  // }

  onTogglePin = (noteId) => {
    noteService.togglePin(noteId).then((note) => {
      this.props.loadNotes(note);
    })
  }



  render() {
    const { note } = this.state;

    if (!note) return <h2>no notes</h2>;
    return (
      <article className="note-preview flex space-between"
        style={{ backgroundColor: note.backgroundColor }}
      >
        <dynamicService.NoteDynamicPreview
          note={note}
          />
        <dynamicService.editNote
        note={note}
        onRemoveNote={this.props.onRemoveNote}
        onDuplicateNote={this.props.onDuplicateNote}
        onChangeColor={this.props.onChangeColor}
        onTogglePin={this.onTogglePin}
        
        />
      </article>
    );
  }
}
