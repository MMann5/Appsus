import { emailService } from '../services/email.service.js';
const { Route, Switch } = ReactRouterDOM;
import { EmailPage } from '../cmps/EmailPage.jsx';
import { EmailCompose } from '../cmps/EmailCompose.jsx';
import { EmailDetail } from '../cmps/EmailDetails.jsx';

const PAGE_TYPES = {
  EMAILS: 'emails',
  READING_EMAIL: 'reading_email',
  COMPSING_EMAIL: 'compsing_email',
  SENT_EMAILS: 'sent_emails',
  READING_SENT_EMAIL: 'reading_sent_email',
};

export class MailApp extends React.Component {
  state = {
    currentPage: PAGE_TYPES.EMAILS,
    emails: [],
    openedEmail: {},
    sentEmails: [],
    filterBy: {
      type: 'all',
      searchQuery: '',
    },
  };

  componentDidMount() {
    this.loadEmails();
    this.loadSentEmails();
  }

  loadEmails = () => {
    emailService
      .query(this.state.filterBy)
      .then((emails) => this.setState({ emails }));
  };
  loadSentEmails = () => {
    emailService
      .querySentEmails()
      .then((sentEmails) => this.setState({ sentEmails }));
  };

  getBack = () => {
    this.setState({ currentPage: PAGE_TYPES.EMAILS });
  };
  getBackSent = () => {
    this.setState({ currentPage: PAGE_TYPES.SENT_EMAILS });
  };

  getMainPageView = () => {
    const { currentPage } = this.state;

    switch (currentPage) {
      case PAGE_TYPES.EMAILS:
        return (
          <EmailPage
            emails={this.state.emails}
            openEmail={this.openEmail}
            onToggleStar={this.onToggleStar}
            onDeleteEmail={this.onDeleteEmail}
            onToggleCompose={this.onToggleCompose}
            onToggleSentEmails={this.onToggleSentEmails}
            isSentEmail={false}
            getBack={this.getBack}
          />
        );
      case PAGE_TYPES.READING_EMAIL:
        return (
          <EmailDetail
            email={this.state.openedEmail}
            getBack={this.getBack}
          />
        );
      case PAGE_TYPES.READING_SENT_EMAIL:
        return (
          <EmailDetail
            email={this.state.openedEmail}
            getBack={this.getBackSent}
          />
        );
      case PAGE_TYPES.COMPSING_EMAIL:
        return (
          <EmailCompose
            onStoreSentEmail={this.onStoreSentEmail}
            getBack={this.getBack}
          />
        );
      case PAGE_TYPES.SENT_EMAILS:
        return (
          <EmailPage
            emails={this.state.sentEmails}
            openEmail={this.openSentEmail}
            onToggleStar={this.onToggleStar}
            onDeleteEmail={this.onDeleteSentEmail}
            isSentEmail={true}
            getBack={this.getBack}
          />
        );
    }
  };

  openEmail = (ev, openedEmail) => {
    this.setState(
      {
        openedEmail,
        currentPage: PAGE_TYPES.READING_EMAIL,
      },
      this.getMainPageView
    );
  };
  openSentEmail = (ev, openedEmail) => {
    this.setState(
      {
        openedEmail,
        currentPage: PAGE_TYPES.READING_SENT_EMAIL,
      },
      this.getMainPageView
    );
  };

  onToggleStar = (ev, id) => {
    emailService.toggleStar(ev.target.checked, id).then(() => {
      this.loadEmails();
    });
  };
  onDeleteEmail = (id) => {
    emailService.deleteEmail(id).then(() => {
      this.loadEmails();
    });
  };
  onDeleteSentEmail = (id) => {
    emailService.deleteSentEmail(id).then(() => {
      this.loadSentEmails();
    });
  };
  onStoreSentEmail = (email) => {
    emailService.addSentEmail(email).then(() => {
      this.loadSentEmails();
    });
  };
  onToggleCompose = () => {
    this.setState(
      { currentPage: PAGE_TYPES.COMPSING_EMAIL },
      this.getMainPageView
    );
  };
  onToggleSentEmails = () => {
    this.setState(
      { currentPage: PAGE_TYPES.SENT_EMAILS },
      this.getMainPageView
    );
  };
  render() {
    const mainPageView = this.getMainPageView();
    return (
      <section>
        <div>{mainPageView}</div>
      </section>
    );
  }
}
