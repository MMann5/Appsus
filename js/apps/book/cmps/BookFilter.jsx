export class BookFilter extends React.Component {
  state = {
    filterBy: {
      title: '',
      minPrice: '',
      maxPrice: '',
    },
  };

  handleChange = (ev) => {
    const field = ev.target.name;
    const value =
      ev.target.type === 'number'
        ? +ev.target.value
        : ev.target.value;
    this.setState(
      { filterBy: { ...this.state.filterBy, [field]: value } },
      () => {
        this.props.onSetFilter(this.state.filterBy);
      }
    );
  };

  onFilter = (ev) => {
    ev.preventDefault();
    this.props.onSetFilter(this.state.filterBy);
  };

  render() {
    const { title, minPrice, maxPrice } = this.state.filterBy;
    return (
      <form className='book-filter' onSubmit={this.onFilter}>
        <label htmlFor='by-title'></label>
        <input
          className='filter'
          name='title'
          id='by-title'
          type='text'
          placeholder='title'
          value={title}
          onChange={this.handleChange}
        />
        <label htmlFor='min-Price'></label>
        <input
          className='filter'
          name='minPrice'
          id='min-Price'
          type='number'
          placeholder='Min Price'
          value={minPrice}
          onChange={this.handleChange}
        />
        <label htmlFor='max-Price'></label>
        <input
          className='filter'
          name='maxPrice'
          id='max-Price'
          type='number'
          placeholder='Max Price'
          value={maxPrice}
          onChange={this.handleChange}
        />
        <button className='btn'>Filter</button>
      </form>
    );
  }
}
