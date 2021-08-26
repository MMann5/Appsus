export class EmailFilter extends React.Component {
  state = {
    filterBy: {
      searchQuery: '',
      type: 'all',
    },
  };

  handleChange = (ev) => {
    const field = ev.target.name;
    this.setState({
      filterBy: { ...this.state.filterBy, [field]: ev.target.value },
    });
  };

  onSave = (ev) => {
    ev.preventDefault();
    this.props.setFilterBy(
      this.state.filterBy,
      this.props.isSentEmail
    );
    ev.target.reset();
    this.setState({
      filterBy: { searchQuery: '', type: 'all', body: '' },
    });
  };

  render() {
    const { searchQuery, type } = this.state;
    return (
      <div className='compose-mail'>
        <form className='mail-searchbox' onSubmit={this.onSave}>
          <label htmlFor='by-subject'></label>
          <input
            value={searchQuery}
            className='search search-txt add-book'
            name='searchQuery'
            type='text'
            placeholder='Search...'
            onChange={this.handleChange}
          ></input>
          {!this.props.isSentEmail && (
            <select
              className='select select-txt-type'
              name='type'
              onChange={this.handleChange}
            >
              <option value='all'>All</option>
              <option value='read'>Read</option>
              <option value='unread'>Unread</option>
            </select>
          )}
          <button className="btn">Search</button>
        </form>
      </div>
    );
  }
}
