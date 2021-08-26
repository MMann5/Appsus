export function BooksResults({ res, onAddBook, resetQuery }) {
  return (
    <div className='results-all'>
      {res.map((r) => (
        <div className='results' key={r.id}>
          <p className='results-list'>{r.volumeInfo.title.substring(0, 25)}</p>
          <button
            className='btn-add-book'
            onClick={(e) => {
              onAddBook(e, r);
              resetQuery();
            }}
          >
            <img className='add-icon'src="../js/apps/book/assets/img/add.png" alt="" />
          </button>
        </div>
      ))}
    </div>
  );
}
{
}
