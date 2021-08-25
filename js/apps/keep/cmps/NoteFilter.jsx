export class NoteFilter extends React.Component {
    state = {
        filterBy: {
            title: '',
            isPinned: '',
        }
    }

    onFilter = (ev) => {
        ev.preventDefault();
        this.props.onSetFilter(this.state.filterBy)
    };

    handleChange = (ev) => {
        console.log(ev.target.value);
        const field = ev.target.name;
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value;
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
            this.props.onSetFilter(this.state.filterBy)
        });
    };

    render() {
        const { title, isPinned } = this.state.filterBy
        return (
            <form className="filter">
                <input name="title" type="text" id="title" value={title} onChange={this.handleChange} placeholder="Enter Name" />
                <select name="isPinned" value={isPinned} onChange={this.handleChange}>
                    <option value="all">All</option>
                    <option value="isPinned">Pinned</option>
                </select>
            </form>
        )
    }
}