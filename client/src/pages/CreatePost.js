import React from 'react';
import './CreatePost.css'
import { supabase } from '../client';


const CreatePost = () => {

const [post, setPost] = React.useState({
                                        "title": "",
                                        "author": "",
                                        "description" : ""
                                        })

    const createPost = async (event) => {
    event.preventDefault();
    await supabase
    .from('Posts')
    .insert({title: post.title, author: post.author, description: post.description})
    .select();
    window.location = "/";
}

const inputOnChange = (event) => {
    event.preventDefault()
    event.target.id === "title" 
    ? 
    setPost({...post,  "title": event.target.value }) 
    :
    event.target.id === "author"
    ?
    setPost({...post,  "author": event.target.value })
    :
    setPost({...post,  "description": event.target.value })

    console.log(post)
}

    return (
        <div>
            <form>
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={inputOnChange}/><br />
                <br/>

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={inputOnChange}/><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" value={post.description} onChange={inputOnChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={createPost}/>
            </form>
        </div>
    )
}

export default CreatePost