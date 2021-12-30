import { noteService } from "../services/note.service.js";
import {dynamicService} from "./note-dynamic-preview.jsx"
const { Link } = ReactRouterDOM



export class NotePreview extends React.Component {
    state ={
        note:null  
    }

    componentDidMount(){
        const note = this.props.note;
        this.setState({note});
        // console.log(note)
    }

    // onChangeColor(color) {
    //     const note = this.state.note;
    //     noteService.changeColor(note.id, color)
    //     .then(this.setState({note}))
    // }

    render() {
        const { note } = this.state;
        
        if(!note) return <h2>no notes</h2>
        return (
            <article className="note-preview flex space-between" style={{backgroundColor: note.backgroundColor}}>
                <dynamicService.NoteDynamicPreview
                    note={note}
                />
                
            </article>
        )
    }
}


