export class LongText extends React.Component {
  state = {
    isShown: false,
    isReadMore: true,
  };

  onChange = () => {
    this.setState({ isShown: !this.state.isShown });
  };

  onToggleTxt = () => {
    let txt = this.state.isShown ? '...Less' : 'More...';
    return txt;
  };
  render() {
    const { book } = this.props;

    return (
      <div>
        {book.description.length > 100 && !this.state.isShown ? (
          <div>{`${book.description.substring(0, 100)}...`}</div>
        ) : (
          book.description
        )}
        {book.description.length > 100 && (
          <a className='more' onClick={this.onChange}>
            {this.onToggleTxt()}
          </a>
        )}
      </div>
    );
  }
}
