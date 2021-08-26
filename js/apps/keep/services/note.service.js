import { storageService } from '../../../services/storage.service.js';
import { utilService } from '../../../services/util.service.js';

export const noteService = {
  query,
  deleteNote,
  changeColor,
  addNote,
  updateNote,
  togglePin,
};

const KEY = 'NOTESDB';

var gNotes = [
  {
    id: utilService.makeId(),
    isPinned: false,
    info: {
      txt: 'Today is Reactive Sprint !',
      url: null,
    },
    style: {
      backgroundColor: '#CD3D3D',
    },
  },
  {
    id: utilService.makeId(),
    isPinned: false,
    info: {
      url:
        'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk',
      txt: 'Good memories...',
    },
    style: {
      backgroundColor: '#3DCD83',
    },
  },
  {
    id: utilService.makeId(),
    isPinned: false,
    info: {
      url:
        'https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo',
      txt: 'Good memories...',
    },
    style: {
      backgroundColor: '#3DC4CD',
    },
  },
  {
    id: utilService.makeId(),
    isPinned: false,
    info: {
      url:
        'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y',
      txt: 'Funny Dog',
    },
    style: {
      backgroundColor: '#CDC43D',
    },
  },
  {
    id: utilService.makeId(),
    isPinned: false,
    info: {
      url:
        'https://i.picsum.photos/id/1023/3955/2094.jpg?hmac=AW_7mARdoPWuI7sr6SG8t-2fScyyewuNscwMWtQRawU',
      txt: 'So Nature..',
    },
    style: {
      backgroundColor: '#C63DCD',
    },
  },
  {
    id: utilService.makeId(),
    isPinned: false,
    info: {
      url:
        'https://thumbs.dreamstime.com/b/happy-cat-closeup-portrait-funny-smile-cardboard-young-blue-background-102078702.jpg',
      txt: 'A little fun to make me smile',
    },
    style: {
      backgroundColor: '#fff',
    },
  },
];

function query() {
  gNotes.some((note, idx) => {
    note.isPinned && gNotes.unshift(gNotes.splice(idx, 1)[0]);
  });
  return Promise.resolve(gNotes);
}

function deleteNote(noteId) {
  var noteIdx = gNotes.findIndex((note) => noteId === note.id);
  gNotes.splice(noteIdx, 1);
  _saveToStorage();
  return Promise.resolve();
}

function addNote({ txt, url, backgroundColor }) {
  var note = {
    id: utilService.makeId(),
    isPinned: false,
    info: {
      txt,
      url,
    },
    style: {
      backgroundColor,
    },
  };
  gNotes.push(note);
  _saveToStorage();
  return Promise.resolve();
}

function changeColor(color, noteId) {
  var noteIdx = gNotes.findIndex((note) => noteId === note.id);
  gNotes[noteIdx].style.backgroundColor = color;
  _saveToStorage();
  return Promise.resolve();
}

function updateNote(txt, noteId) {
  var noteIdx = gNotes.findIndex((note) => noteId === note.id);
  gNotes[noteIdx].info.txt = txt;
  _saveToStorage();
  return Promise.resolve();
}

function togglePin(val, noteId) {
  var noteIdx = gNotes.findIndex((note) => noteId === note.id);
  gNotes[noteIdx].isPinned = val;
  _saveToStorage();
  return Promise.resolve();
}

function _saveToStorage() {
  storageService.saveToStorage(KEY, gNotes);
}
