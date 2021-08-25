import { utilService } from './util.service.js';
import { storageService } from './storage.service.js';
import books from '../books.js';
const API_KEY = 'AIzaSyAPNAHn4DZbAITbDB5DJ0Hq8OnfdXnY99Q';
const API_URL = 'https://www.googleapis.com/books/v1/volumes';
export const bookService = {
  query,
  getCurrency,
  getBookById,
  addReview,
  deleteBook,
  getNextBookId,
  deleteReview,
  getPrevBookId,
  getInfo,
  getFormmatedBook,
  addToGbooks,
};

const KEY = 'books';
var gBooks = books;

function query(filterBy) {
  if (filterBy) {
    let { title, minPrice, maxPrice } = filterBy;
    maxPrice = maxPrice ? maxPrice : Infinity;
    minPrice = minPrice ? minPrice : 0;
    const booksToShow = gBooks.filter(
      (book) =>
        book.title.includes(title) &&
        book.listPrice.amount >= minPrice &&
        book.listPrice.amount <= maxPrice
    );
    return Promise.resolve(booksToShow);
  }
  return Promise.resolve(gBooks);
}

function _saveBooksToStorage() {
  storageService.saveToStorage(KEY, gBooks);
}

function getBooks() {
  return Promise.resolve(gBooks);
}

function getBookById(bookId) {
  var book = gBooks.find((book) => bookId === book.id);
  return Promise.resolve(book);
}

function getCurrency(currency) {
  switch (currency) {
    case 'EUR':
      return '€';
    case 'USD':
      return '$';
    case 'ILS':
      return '₪';
    default:
      return '$';
  }
}

function addReview(bookId, review) {
  review.id = utilService.makeId();
  const bookIdx = books.map((book) => book.id).indexOf(bookId);
  var book = getBookById(bookId)
    .then((book) => {
      book.review
        ? book.review.push(review)
        : (book.review = [review]);
      books.splice(bookIdx, JSON.stringify(book));
      return book;
    })
    .then((book) => Promise.resolve(book));
  _saveBooksToStorage();
  return Promise.resolve(book);
}

function deleteReview(bookId, reviewId) {
  const bookIdx = books.map((book) => book.id).indexOf(bookId);
  var book = getBookById(bookId)
    .then((book) => {
      var reviewIdx = book.review.findIndex(
        (review) => review.id === reviewId
      );
      book.review.splice(reviewIdx, 1);
      books.splice(bookIdx, JSON.stringify(book));
      return book;
    })
    .then((book) => Promise.resolve(book));
  _saveBooksToStorage();
  return Promise.resolve(book);
}

function deleteBook(bookId) {
  var bookIdx = gBooks.findIndex(function (book) {
    return bookId === book.id;
  });
  gBooks.splice(bookIdx, 1);
  _saveBooksToStorage();
  return Promise.resolve();
}

function getNextBookId(bookId) {
  const bookIdx = gBooks.findIndex((book) => book.id === bookId);
  let nextBookIdx = bookIdx + 1;
  if (nextBookIdx === gBooks.length) nextBookIdx = 0;
  return gBooks[nextBookIdx].id;
}
function getPrevBookId(bookId) {
  const bookIdx = gBooks.findIndex((book) => book.id === bookId);
  let prevBookIdx = bookIdx - 1;
  if (prevBookIdx <= 0) prevBookIdx = gBooks.length - 1;
  return gBooks[prevBookIdx].id;
}

function getInfo(query) {
  return axios
    .get(`${API_URL}?q=${query}&key=${API_KEY}`)
    .then((res) => res.data.items);
}

function searchBook(value) {
  return axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks`
    )
    .then((res) => res.data)
    .then((data) => {
      return data.items;
    });
}

function getFormmatedBook(book) {
  return {
    id: book.id,
    title: book.volumeInfo.title
      ? book.volumeInfo.title
      : 'Book Title',
    authors: book.volumeInfo.authors
      ? book.volumeInfo.authors
      : 'Victor Hugo',
    publishDate: book.volumeInfo.publishedDate
      ? book.volumeInfo.publishedDate
      : '1995',
    pageCount: book.volumeInfo.pageCount
      ? book.volumeInfo.pageCount
      : 150,
    categories: 'book',
    description: book.volumeInfo.subtitle
      ? book.volumeInfo.subtitle
      : utilService.makeLorem(),
    thumbnail: book.volumeInfo.imageLinks.smallThumbnail
      ? book.volumeInfo.imageLinks.smallThumbnail
      : `http://coding-academy.org/books-photos/${utilService.getRandomIntInclusive(
          1,
          15
        )}.jpg`,
    language: book.volumeInfo.language
      ? book.volumeInfo.language
      : 'en',
    listPrice: {
      amount: utilService.getRandomIntInclusive(50, 100),
      currencyCode: 'USD',
      isOnSale: Math.random() <= 0.5,
    },
  };
}

function addToGbooks(book) {
  gBooks.push(book);
}
