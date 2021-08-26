import { utilService } from '../../../services/util.service.js';
export const emailService = {
  query,
  toggleStar,
  deleteEmail,
  querySentEmails,
  addSentEmail,
  deleteSentEmail,
};

var mockEmails = [
  {
    id: 'e101',
    subject: 'Miss jew!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    isSent: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
  },
  {
    id: 'e102',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    isSent: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
  },
  {
    id: 'e103',
    subject: 'Miss lad!',
    body: 'Would love to catch up sometimes',
    isRead: true,
    isSent: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
  },
  {
    id: 'e104',
    subject: 'Miss jew!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    isSent: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
  },
  {
    id: 'e105',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    isSent: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
  },
  {
    id: 'e106',
    subject: 'Miss lad!',
    body: 'Would love to catch up sometimes',
    isRead: true,
    isSent: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
  },
];
var mockSentEmails = [
  {
    id: 'e101',
    subject: 'Miss Krembo!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    isSent: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
  },
  {
    id: 'e102',
    subject: 'Miss Dumbo!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    isSent: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
  },
  {
    id: 'e103',
    subject: 'Miss Lambo!',
    body: 'Would love to catch up sometimes',
    isRead: true,
    isSent: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
  },
];

const loggedinUser = {
  email: 'user@appsus.com',
  fullname: 'Mahatma Appsus',
};

const criteria = {
  status: 'inbox/sent/trash/draft',
  txt: 'puki',
  isRead: true,
  isStared: true,
  lables: ['important', 'romantic'],
};

var gEmails;
var gSentEmails;
_setEmails();
function _setEmails() {
  gEmails = mockEmails;
  gSentEmails = mockSentEmails;
}

function query(filterBy) {
  if (filterBy) {
    const { searchQuery, type } = filterBy;
    const emailsToShow = gEmails.filter((email) =>
      email.subject.includes(searchQuery) && type !== 'all'
        ? type === 'read'
          ? email.isRead
          : !email.isRead
        : email
    );
    return Promise.resolve(emailsToShow);
  } else {
    return Promise.resolve(gEmails);
  }
}
function querySentEmails(filterBy) {
  if (filterBy) {
    const { searchQuery } = filterBy;
    const emailsToShow = gSentEmails.filter((email) =>
      email.subject.includes(searchQuery)
    );
    return Promise.resolve(emailsToShow);
  } else {
    return Promise.resolve(gSentEmails);
  }
}

function addSentEmail(email) {
  gSentEmails.push(email);
  return Promise.resolve();
}

function toggleStar(val, emailId) {
  var emailIdx = gEmails.findIndex((email) => emailId === email.id);
  gEmails[emailIdx].isStared = val;
  return Promise.resolve();
}
function deleteEmail(emailId) {
  var emailIdx = gEmails.findIndex((email) => emailId === email.id);
  gEmails.splice(emailIdx, 1);
  return Promise.resolve();
}
function deleteSentEmail(emailId) {
  var emailIdx = gSentEmails.findIndex(
    (email) => emailId === email.id
  );
  gSentEmails.splice(emailIdx, 1);
  return Promise.resolve();
}
