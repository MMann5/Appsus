import { utilService } from '../../../services/util.service.js';
export const emailService = {
  query,
};

var mockEmails = [
  {
    id: 'e101',
    subject: 'Miss you!',
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
    subject: 'Miss you!',
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
_setEmails();
function _setEmails() {
  return (gEmails = mockEmails);
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
