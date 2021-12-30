import { noteService } from "../services/note.service.js";
import { DynamicNoteInput } from './note-input.jsx';

export class AddNote extends React.Component {
  state = {
    noteType: 'NoteText'
  };

  handleBtnClick(e, noteType) {
    this.setState({ noteType });
  }

  handleInputSubmit = (ev) => {
    // if user hit enter
    if (ev.keyCode === 13) {
      this.setState({ noteType: "NoteText" });
      noteService.createNote(ev.target.value, this.state.noteType);
      this.props.loadNotes();
      this.clearFields(ev.target);
    }
  };

  clearFields(target) {
    target.value = "";
  }

  render() {
    const { noteType } = this.state;
    return (
      <div className="note-create flex align-center">
        <div className="note-input-container">
           
          {
            <DynamicNoteInput
              noteType={noteType}
              handleInputSubmit={this.handleInputSubmit}
            />
          }
        </div>

        <div className="note-control-panel flex">
          <div className="note-btn-container ">
            <button
              className={
                this.state.noteType === "NoteText" ? "active" : "undefined"
              }
              onClick={(e) => {
                this.handleBtnClick(e, "NoteText");
              }}
            > text
              <i className="note-btn far fa-comment"></i>
            </button>
          </div>
          <div className="note-btn-container">
            <button
              className={
                this.state.noteType === "NoteImg" ? "active" : "undefined"
              }
              onClick={(e) => {
                this.handleBtnClick(e, "NoteImg");
              }}
            > img
              <i className="note-btn far fa-image"></i>
            </button>
          </div>
          <div className="note-btn-container">
            <button
              className={
                this.state.noteType === "NoteVideo" ? "active" : "undefined"
              }
              onClick={(e) => {
                this.handleBtnClick(e, "NoteVideo");
              }}
            >video
              <i className="note-btn fab fa-youtube"></i>
            </button>
          </div>
          <div className="note-btn-container">
            <button
              className={
                this.state.noteType === "NoteTodos" ? "active" : "undefined"
              }
              onClick={(e) => {
                this.handleBtnClick(e, "NoteTodos");
              }}
            >todo
              <i className="note-btn fas fa-list-ul"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
