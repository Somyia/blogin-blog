import React, { useRef, useState } from 'react';
import { connect } from "react-redux";
import { createBlog } from '../../Redux/Blog/blog.action';




const CreateBlog = ({ createBlog }) => {
    const inputElement = useRef(null);

    const [blog, setBlog] = useState({
        heading: ' ',
        author: '',
        date: ' ',
        content: ''
    })


    const handleChange = e => {
        const { name, value } = e.target
        setBlog({
            ...blog,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        blog.heading.length > 0 && createBlog({
            ...blog,
            id: Date.now(),
        })

        setBlog({
            heading: '',
            author: '',
            date: '',
            content: ''
        })

    }

    return (
        <div className="create-form-area">
            <div>
                <h1>Create a Blog</h1>
            </div>
            <form className="blog-form" onSubmit={handleSubmit}>
                <div>
                    <label>Heading</label>
                    <input
                        onChange={handleChange}
                        value={blog.heading}
                        name='heading'
                        type='text'
                        inputRef={inputElement}

                    />
                </div>
                <div>
                    <label>Author</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={blog.author}
                        name='author'
                        inputRef={inputElement}
                    />
                </div>
                <div>
                    <label>Date</label>
                    <input
                        type="date"
                        onChange={handleChange}
                        value={blog.date}
                        name='date'
                        inputRef={inputElement}
                    />
                </div>

                <div>
                    <label>Content</label>
                    <textarea
                        type="text"
                        onChange={handleChange}
                        value={blog.content}
                        name='content'
                        inputRef={inputElement}

                    ></textarea>
                </div>
                <div>
                    <input className="btn blog-btn"
                        type="submit"
                        value="Create Blog"

                    />
                </div>
            </form >
        </div>

    );
}

export default connect(null, { createBlog })(CreateBlog)
