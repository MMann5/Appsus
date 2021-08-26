import { bookService } from '../services/book.service.js';
export class ReviewDisplay extends React.Component {
  state = {
    book: null,
  };
  componentDidMount() {
    this.setState({ book: this.props.book });
  }

  onDelete = (bookId, reviewId) => {
    bookService
      .deleteReview(bookId, reviewId)
      .then((res) => this.props.onDelReview(res));
  };
  render() {
    const { book } = this.state;
    if (!this.props.book.review) return <div></div>;
    return book.review.map((review, index) => {
      return (
        <div key={index}>
          <h3>{review.fullName}</h3>
          <p>{review.date}</p>
          <p>{`${review.stars}/5`}</p>
          <p>{review.opinion}</p>
          <button className="btn"
            onClick={() =>
              this.onDelete(this.props.book.id, review.id)
            }
          >
            x
          </button>
        </div>
      );
    });
  }
}
