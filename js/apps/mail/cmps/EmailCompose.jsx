export class EmailCompose extends React.Component {
  state = {
    email: {
      to: '',
      subject: '',
      body: '',
    },
  };

  handleChange = (ev) => {
    const field = ev.target.name;
    this.setState({
      email: { ...this.state.email, [field]: ev.target.value },
    });
  };

  onSave = (ev) => {
    ev.preventDefault();
    this.props.onStoreSentEmail(this.state.email);
    ev.target.reset();
    this.setState({
      email: { to: '', subject: '', body: '' },
    });
    this.props.getBack();
  };

  render() {
    const { to, subject, body } = this.state;
    return (
      <div>
        <form className='email-add' onSubmit={this.onSave}>
          <label htmlFor='by-title'></label>
          <textarea
            value={to}
            className='compose compose-txt'
            name='to'
            type='email'
            placeholder='Recipient'
            rows='15'
            cols='20'
            onChange={this.handleChange}
          ></textarea>
          <textarea
            value={subject}
            className='compose compose-txt'
            name='subject'
            type='text'
            placeholder='Subjectio'
            rows='15'
            cols='20'
            onChange={this.handleChange}
          ></textarea>
          <textarea
            value={body}
            className='compose compose-txt'
            name='body'
            type='text'
            placeholder='Write Whatever'
            rows='15'
            cols='20'
            onChange={this.handleChange}
          ></textarea>
          <button>SEND</button>
        </form>
      </div>
    );
  }
}
