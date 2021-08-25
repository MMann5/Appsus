import { emailService } from '../services/email.service.js';
const { Route, Switch } = ReactRouterDOM;
import { EmailList } from '../cmps/EmailList.jsx';
import { EmailCompose } from '../cmps/EmailCompose.jsx';
import { EmailDetails } from '../cmps/EmailDetails.jsx';
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
    emailService
      .query(this.state.filterBy)
      .then((emails) => this.setState({ emails }));
  };
  render() {
    return (
      <section>
        <div>
          <Switch>
            <Route
              path='/mail'
              exact
              component={() => (
                <EmailList emails={this.state.emails} />
              )}
            />
            <Route
              path='/mail/compose'
              exact
              component={() => (
                <EmailCompose sendEmail={this.onSendEmail} />
              )}
            />
            <Route
              path='/mail/:emailId'
              exact
              component={EmailDetails}
            />
          </Switch>
        </div>
      </section>
    );
  }
}
