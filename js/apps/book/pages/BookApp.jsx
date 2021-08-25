import { bookService } from '../services/book.service.js';
import { BookFilter } from '../cmps/BookFilter.jsx';
import { eventBusService } from '../services/event-bus-service.js';
import { BookList } from '../cmps/BookList.jsx';
import { AddBook } from '../cmps/AddBook.jsx';
export class BookApp extends React.Component {
  state = {
    books: [],
    filterBy: null,
  };
  componentDidMount() {
    this.loadBooks();
  }
  loadBooks = () => {
    bookService.query(this.state.filterBy).then((books) => {
      eventBusService.emit('book-count', books.length);
      this.setState({ books });
    });
  };
  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadBooks);
  };
  onSelectBook = (book) => {
    this.setState({ selectedBook: book });
  };
  onAddBook = (ev, book) => {
    ev.preventDefault();
    const newBook = bookService.getFormmatedBook(book);
    this.setState({ books: [...this.state.books, newBook] });
    bookService.addToGbooks(newBook);
    eventBusService.emit('user-msg', {
      txt: 'book added!',
      type: 'success',
    });
  };

  render() {
    const { books } = this.state;
    if (!books) return <div>Loading...</div>;
    return (
      <section className='book-app'>
        <h2>Miss Book</h2>
        <AddBook onAddBook={this.onAddBook} />
        <BookFilter onSetFilter={this.onSetFilter} />
        <BookList
          books={this.state.books}
          onSelectBook={this.onSelectBook}
        />
      </section>
    );
  }
}
