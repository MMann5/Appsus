import { storageService } from "../../../services/storage.service.js";
import { utilService } from "../../../services/util.service.js"
export const notesService = {
  query,
  deleteNote,
  getNoteById,
}

const KEY = 'notesDB'
var gNotes;

function note() {
  var notes = [
    {
      id: utilService.makeId(),
      type: 'txt',
      isPinned: true,
      info: { txt: 'Fullstack Me Baby!' },
      style: { backgroundColor: '#fff' },
    },
    {
      id: utilService.makeId(),
      type: 'img',
      isPinned: false,
      info: { url: 'https://picsum.photos', title: 'Bobi and Me' },
      style: { backgroundColor: '#ff0' },
    },
  ]
  return notes
}


function query() {
  return Promise.resolve(note())
}

function _saveNotesToStorage() {
  storageService.save(KEY, gNotes)
}

function getNoteById(noteId) {
  let note = gNotes.find(function (note) {
    return noteId === note.id
  })
  return Promise.resolve(note)
}

function addNote(note) {
  var note = _createnote(note.type, note.info.url = null, note.info.title = 'new-note')
  gNotes.push(note)
  _saveNotesToStorage;
  return Promise.resolve()
}

function deleteNote(noteId) {
  var noteIdx = gNotes.findIndex(car => carId === car.id)
  gNotes.splice(noteIdx, 1)
  _saveNotesToStorage();
  return Promise.resolve()
}

//   {
//     id: 'n101',
//     type: 'note-txt',
//     isPinned: true,
//     info: { txt: 'Fullstack Me Baby!' },
//   },
//   {
//     id: 'n102',
//     type: 'note-img',
//     info: { url: 'http://some-img/me', title: 'Bobi and Me' },
//     style: { backgroundColor: '#00d' },
//   },
//   {
//     id: 'n103',
//     type: 'note-todos',
//     info: {
//       label: 'Get my stuff together',
//       todos: [
//         { txt: 'Driving liscence', doneAt: null },
//         { txt: 'Coding power', doneAt: 187111111 },
//       ],
//     },
//   },
// ];