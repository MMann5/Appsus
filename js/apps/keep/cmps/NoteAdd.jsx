import { NotePic } from "./NotePic.jsx";
export class NoteAdd extends React.Component {
    state = {
        note: {
            txt: '',
            url: null,
            backgroundColor: 'white',
        },
        isChecked : false
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

    onCheck = (ev) =>{
        this.setState({ isChecked :ev.target.checked});
    }

    render() {
        const { txt, backgroundColor,isChecked} = this.state
        return (
            <div>
                <form className='note-add' onSubmit={this.onSave}>
                    <label htmlFor='by-title'></label>
                    <textarea value={txt}
                        className='filter filter-txt'
                        name='txt'
                        type='text'
                        placeholder='your mind'
                        rows="15" cols="33"
                        onChange={this.handleChange}></textarea>
                    <input value={backgroundColor} className='filter' name='backgroundColor' type='color' onChange={this.handleChange} />
                    <label htmlFor="img-url">Insert Pic</label>
                    <input type="checkbox" onChange={this.onCheck} id="img-url"/>
                    { isChecked && <NotePic url={this.state.note.url} backgroundColor={this.state.note.backgroundColor} onChange={this.handleChange} />}
                    <button>New</button>
                </form>
            </div>
        );
    }
}