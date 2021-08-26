export class NoteAdd extends React.Component {
    state = {
        note: {
            txt: '',
            url: null,
            backgroundColor: '#3DC4CD',
        },
        isChecked: false
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

    onCheck = (ev) => {
        this.setState({ isChecked: ev.target.checked });
    }

    render() {
        const { txt, backgroundColor, isChecked } = this.state
        return (
            <div className="form">
                <form className='note-add' onSubmit={this.onSave}>
                    <label htmlFor='by-title'></label>
                    <textarea value={txt}
                        className='note-input'
                        name='txt'
                        type='text'
                        placeholder='new note..'
                        rows="5" cols="33"
                        onChange={this.handleChange}>
                    </textarea>
                    <div className="note-options">
                        <label htmlFor="color-pal"><img className="color-pal"src="https://img.icons8.com/ios/50/000000/fill-color.png"/></label>
                        <input value={backgroundColor} id="color-pal" className='note-color' name='backgroundColor' type='color' onChange={this.handleChange} hidden />
                        <button className="new-note-btn">New</button>
                        <label htmlFor="img-url"><img className="img-icon" src="https://img.icons8.com/ios/50/000000/image.png" /></label>
                        <input type="checkbox" onChange={this.onCheck} id="img-url" hidden />
                        {isChecked && <div>
                            <input value={this.state.note.url} accept="video/mp4,video/x-m4v,video/*" type="url" name="url" onChange={this.handleChange} placeholder="URL" className="url-note" />
                        </div>}
                    </div>
                </form>
            </div>
        );
    }
}