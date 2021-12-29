import {utilService} from '../../../services/util.service.js';
import {storageService} from '../../../services/storage.service.js';

export const noteService = {
    query
}

const NOTES_KEY = 'notesDB';
let gNotes;



function query(filterBy = null){
    const notes = _loadNotesFromStorage();
    if(!filterBy) return Promise.resolve(notes);
    // else const notesToDisplay = _getFilteredNotes(notes, filterBy);
    // return Promise.resolve(notesToDisplay);
}

_createNotes()
function _createNotes()  {
    let notes = _loadNotesFromStorage();
    if(!notes || !notes.length){
        notes = [
            {
               id:utilService.makeId(),
               type: "note-txt",
               isPinned: true,
               info: {
                   txt: "Lets go!"
               }
            },
            {
                id:utilService.makeId(),
                type: "note-img",
                info: {
                    url: "https://unsplash.com/photos/o4c2zoVhjSw",
                    title: "This movie was amazing!"
                }
            }
        ];

    }
    _saveNotesToStorage(notes);
    return notes;
}

function _saveNotesToStorage (notes) {
    storageService.save(NOTES_KEY, notes);
}

function _loadNotesFromStorage() {
    return storageService.load(NOTES_KEY);
}

