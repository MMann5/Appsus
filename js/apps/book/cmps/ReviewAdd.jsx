import { bookService } from '../services/book.service.js';
export class ReviewAdd extends React.Component {
  state = {
    review: {
      fullName: 'Book Reader',
      stars: 0,
      date: new Date().toLocaleDateString(),
      opinion: '',
    },
  };
  onSaveReview = (ev) => {
    ev.preventDefault();
    const review = this.state.review;
    const bookId = this.props.book.id;
    bookService
      .addReview(bookId, review)
      .then((res) => this.props.onAddReview(res));
  };
  handleChange = ({ target }) => {
    const field = target.name;
    this.setState((prevState) => {
      return {
        review: { ...prevState.review, [field]: target.value },
      };
    });
  };
  render() {
    return (
      <section>
        <form className='book-edit' onSubmit={this.onSaveReview}>
          <h1>Book Review</h1>
          <label htmlFor='full-name'></label>
          <input
            type='text'
            name='fullName'
            id='fullName'
            placeholder='your full name'
            onChange={this.handleChange}
          />
          Rank
          <select
            name='stars'
            id='stars'
            onChange={this.handleChange}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
          Read At :
          <input
            type='date'
            name='date'
            id='read-at'
            onChange={this.handleChange}
          />
          <textarea
            onChange={this.handleChange}
            name='opinion'
            id='opinion'
            cols='30'
            rows='5'
            placeholder='comment this book'
          ></textarea>
          <button className="btn-review">Save Review</button>
        </form>
      </section>
    );
  }
}
