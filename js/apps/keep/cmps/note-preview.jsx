import { noteService } from "../services/note.service.js";
import { dynamicService } from "./note-dynamic-preview.jsx";
// const { Link } = ReactRouterDOM;

export class NotePreview extends React.Component {
  state = {
    note: null,
  };

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



  // onClickedColor = (color) => {
  //   this.props.onChangeColor(this.props.note.id, 'gold')
  // }

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
        
        />
      </article>
    );
  }
}
