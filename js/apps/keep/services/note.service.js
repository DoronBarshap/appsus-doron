import { utilService } from "../../../services/util.service.js";
import { storageService } from "../../../services/storage.service.js";

export const noteService = {
  query,
  createNote,
  removeNote,
  getNoteById,
  duplicateNote,
  changeColor,
};

const NOTES_KEY = "notesDB";

_createNotes();

function query(filterBy = null) {
  const notes = _loadNotesFromStorage();
  if (!filterBy) return Promise.resolve(notes);
  // else const notesToDisplay = _getFilteredNotes(notes, filterBy);
  //   return Promise.resolve(notesToDisplay);
}

function getNoteById(noteId) {
    const notes = _loadNotesFromStorage();
    const note = notes.find(note => note.id === noteId);
    return note;
 }

function addNote(noteToAdd) {
  let notes = _loadNotesFromStorage();
  notes.unshift(noteToAdd);
  _saveNotesToStorage(notes);
  return Promise.resolve(noteToAdd);
}

function removeNote(noteId) {
  let notes = _loadNotesFromStorage();
  notes = notes.filter((note) => note.id !== noteId);
  _saveNotesToStorage(notes);
  return Promise.resolve(notes);
}

function duplicateNote(noteId) {
    const notes = _loadNotesFromStorage();
    const currNote = getNoteById(noteId);
    notes.unshift({...currNote, id: utilService.makeId()});
    _saveNotesToStorage(notes);
    return Promise.resolve(notes);
}

// changes color only after manually refreshing the page
function changeColor(noteId, color){
    console.log(noteId, color)
    const notes = _loadNotesFromStorage();
    const note = notes.find(note => note.id === noteId);
    note.backgroundColor = color;
    _saveNotesToStorage(notes);
    return Promise.resolve(notes);
}

function createNote(inputVal, noteType) {
  if (!inputVal) return;
  let note = {
    id: utilService.makeId(),
    type: noteType,
    isPinned: false,
    backgroundColor: "whitesmoke",
  };

  switch (noteType) {
    case "note-txt":
      note.info = {
        title: "New note",
        txt: inputVal,
        todos: [],
      };
      break;
    case "note-img":
      note.info = {
        url: inputVal,
        title: "New note",
        todos: [],
      };
      break;
    case "note-video":
      note.info = {
        video: inputVal,
        title: "New note",
        todos: [],
      };
      break;
    case "note-todo":
      note.info = {
        todos: [],
        title: "New note",
      };
      break;

    default:
      return "Error";
  }

  addNote(note);
}

function _createNotes() {
  let notes = _loadNotesFromStorage();
  if (!notes || !notes.length) {
    notes = [
      {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
          title: "Sprint #3",
          url: "https://media.giphy.com/media/28lD0jH5emdr7r5ooD/giphy.gif",
          txt: "lets go!",
          todos: [],
        },
        backgroundColor: "rgb(209, 172, 204)",
      },
      {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
          title: "Don't forget!",
          txt: "We are in 2022!",
          todos: [],
        },
        backgroundColor: "lightgrey",
      },
      {
        id: utilService.makeId(),
        type: "note-todo",
        isPinned: true,
        info: {
          title: "To Do:",
          url: "https://see.news/wp-content/uploads/2021/05/%D8%A9-750x375.jpg",
          todos: [
            {
              id: utilService.makeId(),
              txt: "Buy a ticket to Japan",
              doneAt: Date.now(),
            },
            { id: utilService.makeId(), txt: "Never come back", doneAt: null },
          ],
        },
        backgroundColor: "lightsteelblue",
      },
      {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
          title: "Look at this!",
          todos: [],
          video: "https://www.youtube.com/embed/i93Z7zljQ7I",
        },
        backgroundColor: "lightgreen",
      },
      {
        id: utilService.makeId(),
        type: "note-video",
        isPinned: true,
        info: {
          title: "They said sprint 3 is going to be fun!",
          txt: "I'm not superstitious, but I am a little stitious.",
          todos: [],
        },
        backgroundColor: "silver",
      },
      {
        id: utilService.makeId(),
        type: "note-video",
        isPinned: true,
        info: {
          title: "MOOD",
          url: "https://media.giphy.com/media/6Q3M4BIK0lX44/giphy.gif",
          txt: "Me when Elhanan asks me how I'm doing . . .",
          todos: [],
        },
        backgroundColor: "rgb(240, 240, 196)",
      },
      {
        id: utilService.makeId(),
        type: "note-img",
        isPinned: true,
        backgroundColor: "pink",
        info: {
          title: "Spidey!",
          url: "https://assets-prd.ignimgs.com/2021/11/08/fdo0mohvqaap5td-1636343382417.jpg",
          txt: " Spider-Man, Spider-Man Does whatever a spider can Spins a web, any size, Catches thieves just like flies Look Out! Here comes the Spider-Man.",
          source:
            "https://www.lyricsondemand.com/tvthemes/spidermanlyrics.html!",
          todos: [],
        },
      },
      {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
          title: "My bucket list",

          todos: [
            {
              id: utilService.makeId(),
              txt: "Travel to Africa",
              doneAt: Date.now(),
            },
            {
              id: utilService.makeId(),
              txt: "Stay at home all day",
              doneAt: null,
            },
            {
              id: utilService.makeId(),
              txt: "Binge Brooklyn 99 (again)",
              doneAt: null,
            },
          ],
        },
        backgroundColor: "lightblue",
      },
    ];
  }

  _saveNotesToStorage(notes);
  return notes;
}

function _saveNotesToStorage(notes) {
  storageService.save(NOTES_KEY, notes);
}

function _loadNotesFromStorage() {
  return storageService.load(NOTES_KEY);
}
