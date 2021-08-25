export function BooksResults({ res, onAddBook, resetQuery }) {
  return (
    <div className='results-all'>
      {res.map((r) => (
        <div className='results' key={r.id}>
          <h3>{r.volumeInfo.title.substring(0, 25)}</h3>
          <button
            className='btn-add-book'
            onClick={(e) => {
              onAddBook(e, r);
              resetQuery();
            }}
          >
            ADD
          </button>
        </div>
      ))}
    </div>
  );
}
{
}
