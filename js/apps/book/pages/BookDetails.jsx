const { Link } = ReactRouterDOM;
import { eventBusService } from '../services/event-bus-service.js';
import { LongText } from '../cmps/LongTxt.jsx';
import { bookService } from '../services/book.service.js';
import { ReviewAdd } from '../cmps/ReviewAdd.jsx';
import { ReviewDisplay } from '../cmps/ReviewDisplay.jsx';
export class BookDetails extends React.Component {
  state = {
    book: null,
  };

  componentDidMount() {
    this.loadBook();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.bookId !==
      this.props.match.params.bookId
    ) {
      this.loadBook();
    }
  }
  onAddReview = (updatedBook) => {
    this.setState({ book: updatedBook });
  };
  onDelReview = (updatedBook) => {
    this.setState({ book: updatedBook });
  };

  loadBook = () => {
    const id = this.props.match.params.bookId;
    bookService.getBookById(id).then((book) => {
      if (!book) this.props.history.push('/');
      this.setState({ book });
    });
  };

  onBack = () => {
    this.props.history.push('/book');
  };

  onDeleteBook = () => {
    bookService.deleteBook(this.state.book.id).then(this.onBack);
  };
  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    const currYear = new Date().getFullYear();
    const { book } = this.state;
    if (!book) return <div>Loading...</div>;
    return (
      <section className='book-details'>
        <img src={book.thumbnail} />
        <h2 className='title-book'>{book.title}</h2>
        <div
          className={
            book.listPrice.amount > 150
              ? 'red'
              : book.listPrice.amount < 20
              ? 'green'
              : 'blue'
          }
        >
          {`${bookService.getCurrency(
            book.listPrice.currencyCode
          )} ${book.listPrice.amount}`}{' '}
        </div>
        <LongText book={book} />
        <p>
          {book.pageCount} Pages:
          {book.pageCount > 500
            ? ' Long Reading'
            : book.pageCount > 200
            ? ' Decent Reading'
            : ' Light Reading'}
        </p>
        <p>Category : {book.categories[0]}</p>
        <p>
          Published in: {book.publishedDate}{' '}
          {currYear - book.publishedDate > 10
            ? 'Veteran Book'
            : currYear - book.publishedDate <= 1
            ? 'New!'
            : ''}
        </p>
        <section className='actions'>
          <button className="back"onClick={this.onBack}>Go Back</button>
        </section>
        <Link className="prev-next" to={`/book/${bookService.getPrevBookId(book.id)}`}>
          Prev
        </Link>
        <button className="back" onClick={this.onDeleteBook}>Delete</button>
        <Link className="prev-next" to={`/book/${bookService.getNextBookId(book.id)}`}>
          Next
        </Link>
        <ReviewAdd book={book} onAddReview={this.onAddReview} />
        <ReviewDisplay book={book} onDelReview={this.onDelReview} />
      </section>
    );
  }
}
