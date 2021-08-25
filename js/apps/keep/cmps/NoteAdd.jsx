export class NoteAdd extends React.Component {
    state = {
        note: {
            txt: '',
            url: null,
            backgroundColor: 'white',
        },
    };

    handleChange = (ev) => {
        const field = ev.target.name;
        const value =
            ev.target.type === 'number'
                ? +ev.target.value
                : ev.target.value;
        this.setState(
            { note: { ...this.state.note, [field]: value } });
    };

    onSave = (ev) => {
        ev.preventDefault();
        this.props.onAddNote(this.state.note);
        ev.target.reset()
        this.setState({ note: { txt: '', url: null, backgroundColor: 'white' } })
    };

    render() {
        const { txt, backgroundColor, url } = this.state
        return (
            <form className='note-add' onSubmit={this.onSave}>
                <label htmlFor='by-title'></label>
                <input
                    value={txt}
                    className='filter'
                    name='txt'
                    type='text'
                    placeholder='your mind'
                    onChange={this.handleChange}
                />
                <label htmlFor="url">Enter a URL:</label>
                <input value={url} type="url" name="url" onChange={this.handleChange} />
                <input
                    value={backgroundColor}
                    className='filter'
                    name='backgroundColor'
                    type='color'
                    onChange={this.handleChange}
                />
                <button>ADD</button>
            </form>
        );
    }
}