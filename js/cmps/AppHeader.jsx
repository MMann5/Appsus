const { NavLink, withRouter } = ReactRouterDOM;

class _AppHeader extends React.Component {
  render() {
    return (
      <section className='app-header'>
        <h1 onClick={() => this.props.history.goBack()}>
          Book Shop
        </h1>
        <nav>
          <NavLink activeClassName='my-active' exact to='/'>
            Home
          </NavLink>
          <NavLink to='/book'>Our Books</NavLink>
          <NavLink to='/notes'>Our Notes</NavLink>
          <NavLink to='/mail'>Our Mail</NavLink>
          <NavLink to='/'>Home</NavLink>
        </nav>
      </section>
    );
  }
}
export const AppHeader = withRouter(_AppHeader);
