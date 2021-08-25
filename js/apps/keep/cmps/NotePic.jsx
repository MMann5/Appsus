export function NotePic ({url,handleChange}){
    return (
        <div>
            {/* <label htmlFor="url">Enter a URL:</label> */}
            <input value={url} type="url" name="url" onChange={handleChange} placeholder="URL" />
           
        </div>
    )
}