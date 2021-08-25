import { bookService } from '../services/book.service.js';
const { Link } = ReactRouterDOM;
export function BookPreview({ book, onSelectBook, books }) {
  return (
    <article className='book-preview'>
      <h4 className='title-book'>{book.title}</h4>
      <img src={book.thumbnail} />
      <div
        className={
          book.listPrice.amount > 150
            ? 'red'
            : book.listPrice.amount < 20
            ? 'green'
            : 'blue'
        }
      >
        {`${bookService.getCurrency(book.listPrice.currencyCode)} ${
          book.listPrice.amount
        }`}
      </div>
      <div>
        {book.listPrice.isOnSale ? (
          <img
            className='sold'
            src='./assets/img/sale.PNG'
            alt=''
          ></img>
        ) : (
          ''
        )}{' '}
      </div>
      <Link to={`/book/${book.id}`}>Details</Link>
    </article>
  );
}
