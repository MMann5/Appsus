import { bookService } from '../services/book.service.js';
import { utilService } from '../services/util.service.js';
import { BooksResults } from './BooksResults.jsx';
export class AddBook extends React.Component {
  state = {
    query: '',
    res: [],
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  getInfo = () => {
    bookService.getInfo(this.state.query).then((data) => {
      this.setState({
        res: data,
      });
    });
  };
  resetQuery = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <form>
        <input type="text" className='add-book'
          placeholder='Add a new book...'
          ref={(input) => (this.search = input)}
          onChange={this.handleInputChange}
        />
        {this.state.query && this.state.res && (
          <BooksResults
            res={this.state.res}
            onAddBook={this.props.onAddBook}
            resetQuery={this.resetQuery}
          />
        )}
      </form>
    );
  }
}
