import React from 'react'
import { Card } from 'react-bootstrap'



const Blog = ({ item }) => {

    return (

        <Card className="blog-card">

            <a href=""><h3> {item.heading}</h3></a>
            <small><i>by {item.author}</i> on {item.date}</small >
            <p>{item.content.slice(0, 200)}</p>

        </Card >
    );
}

export default Blog