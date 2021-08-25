import { storageService } from "../../../services/storage.service.js";
import { utilService } from "../../../services/util.service.js"
export const NotesService = {

}

const KEY = 'notesDB'

const gNotes = [
  {
    id: 'n101',
    type: 'note-txt',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
  },
  {
    id: 'n102',
    type: 'note-img',
    info: { url: 'http://some-img/me', title: 'Bobi and Me' },
    style: { backgroundColor: '#00d' },
  },
  {
    id: 'n103',
    type: 'note-todos',
    info: {
      label: 'Get my stuff together',
      todos: [
        { txt: 'Driving liscence', doneAt: null },
        { txt: 'Coding power', doneAt: 187111111 },
      ],
    },
  },
];

function _saveNotesToStorage() {
  storageService.save(KEY, gNotes)
}

function getNotes() {
  return Promise.resolve(gNotes)
}

function _createNotes() {
  var notes = storageService.loadFromStorage(KEY)
  if (!notes || !notes.length) {
    notes =
      [
        {
          id: utilService.makeId(),
          type: 'txt',
          isPinned: true,
          info: { txt: 'Fullstack Me Baby!' },
        },
        {
          id: utilService.makeId(),
          type: 'img',
          info: { url: 'http://some-img/me', title: 'Bobi and Me' },
          style: { backgroundColor: '#00d' },
        },
        {
          id: utilService.makeId(),
          type: 'todos',
          info: {
            label: 'Get my stuff together',
            todos: [
              { txt: 'Driving liscence', doneAt: null },
              { txt: 'Coding power', doneAt: 187111111 },
            ],
          },
        },
      ];
  }
  gNotes = notes;
  _saveNotesToStorage();
}
