import { BookDetails } from './js/apps/book/pages/BookDetails.jsx';
import { BookApp } from './js/apps/book/pages/BookApp.jsx';
import { NoteApp } from './js/apps/keep/pages/NoteApp.jsx';
import { MailApp } from './js/apps/mail/pages/MailApp.jsx';
import { Home } from './js/pages/Home.jsx';
import { AppHeader } from './js/cmps/AppHeader.jsx';
import { AppFooter } from './js/cmps/AppFooter.jsx';
import { UserMsg } from './js/cmps/UserMsg.jsx';
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export function App() {
  return (
    <Router>
      <header className='main-header'>
        <AppHeader />
      </header>
      <main className='main-content main-layout'>
        <Switch>
          <Route path='/book/:bookId' component={BookDetails} />
          <Route path='/book' component={BookApp} />
          <Route path='/mail' component={MailApp} />
          <Route path='/notes' component={NoteApp} />
          <Route path='/' component={Home} />
        </Switch>
      </main>
      <footer className="main-footer">
        <AppFooter />
      </footer>
      <UserMsg />
    </Router>
  );
}
