import { emailService } from '../services/email.service.js';
export class MailApp extends React.Component {
  state = {
    emails: [],
    filterBy: {
      type: 'all',
      searchQuery: '',
    },
  };
  componentDidMount() {
    this.loadEmails();
  }

  loadEmails = () => {
    emailService;
    emailService
      .query(this.state.filterBy)
      .then((emails) => this.setState({ emails }));
  };
  render() {
    return (
      <section>
        <h1>cats</h1>
      </section>
    );
  }
}
