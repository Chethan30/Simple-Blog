import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setisPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); //prevent refesh
        const blog = {title, body ,author};

        setisPending(true);

        //fetching databse using fetch API
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog) //converts data in blog obj to string and JSON object
        }).then( () => {
            console.log('new blog added!');
            setisPending(false);
            history.push('/');
        });
    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog title : </label>
                <input 
                    type="text"
                    required
                    value = {title}
                    onChange= {(e) => setTitle(e.target.value)}
                />
                <label>Blog Body : </label>
                <textarea
                    required
                    value = {body}
                    onChange={(e)=> setBody(e.target.value)}
                >

                </textarea>
                <label>Blog Author : </label>
                <select
                value={author}
                onChange={ (e)=> setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                    <option value="chethan">Chethan</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                { isPending && <button>AddING Blog....</button>}
            </form>
        </div>
     );
}
 
export default Create;