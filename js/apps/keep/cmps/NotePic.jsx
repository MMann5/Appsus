export function NotePic ({url,handleChange}){
    return (
        <div>
            <input value={url} type="url" name="url" onChange={handleChange} placeholder="URL" />
        </div>
    )
}