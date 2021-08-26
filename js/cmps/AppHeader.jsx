const { NavLink, withRouter } = ReactRouterDOM;
class _AppHeader extends React.Component {
  render() {
    return (
      <section className='app-header'>
        <h1 onClick={() => this.props.history.goBack()}>Appsus</h1>
        <nav className='header-container flex space-between align-center '>
          <NavLink className='nav-bar' exact to='/'>
            Home
          </NavLink>
          <NavLink className='nav-bar' to='/notes'>
            Notes
          </NavLink>
          <NavLink className='nav-bar' to='/mail'>
            Mail
          </NavLink>
          <NavLink className='nav-bar' to='/book'>
            Books
          </NavLink>
        </nav>
      </section>
    );
  }
}
export const AppHeader = withRouter(_AppHeader);
