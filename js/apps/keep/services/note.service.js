import {storageService} from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
    query,
    deleteNote,
    changeColor,
    addNote,
    updateNote
}

const key = 'NOTESDB'

var gNotes = [
    {
        id: utilService.makeId(),
        isPinned: true,
        info: {
            txt: 'Today is Reactive Sprint !',
            url: null,
        },
        style: {
            backgroundColor: "#dd0"
        }
    },
    {
        id: utilService.makeId(),
        isPinned: false,
        info: {
            url: 'http://coding-academy.org/books-photos/20.jpg',
            txt: 'Good memories...'
        },
        style: {
            backgroundColor: "#0d0d"
        }
    },
    {
        id: utilService.makeId(),
        isPinned: false,
        info: {
            url: 'http://coding-academy.org/books-photos/10.jpg',
            txt: 'Good memories...'
        },
        style: {
            backgroundColor: "#fff"
        }
    }]

function query() {
    return Promise.resolve(gNotes)
}

function deleteNote(noteId) {
    var noteIdx = gNotes.findIndex(note => noteId === note.id)
    gNotes.splice(noteIdx, 1)
    _saveToStorage
    return Promise.resolve()
}

function addNote({txt,backgroundColor,url}) {
    var note = {
        id: utilService.makeId(),
        isPinned: false,
        info: {
            txt,
            url,
        },
        style: {
            backgroundColor,
        }
    }
    gNotes.push(note)
    _saveToStorage
    return Promise.resolve()
}

function changeColor(color,noteId){
    var noteIdx = gNotes.findIndex(note => noteId === note.id)
    gNotes[noteIdx].style.backgroundColor = color
    _saveToStorage
    return Promise.resolve()
}

function updateNote(txt,noteId){
    var noteIdx = gNotes.findIndex(note => noteId === note.id)
    gNotes[noteIdx].info.txt = txt
    _saveToStorage
    return Promise.resolve()
}

function _saveToStorage(){
    storageService.saveToStorage(key, gNotes)
}