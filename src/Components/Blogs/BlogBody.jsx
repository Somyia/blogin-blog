import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles"
import { Container, Grid, } from "@material-ui/core"
import { useSelector } from "react-redux"
import Blog from './Blog';

const useStyles = makeStyles(() => ({
    root: {
        paddingTop: '2rem'
    },
    toDos: {
        margin: '1.5rem auto'
    }
}));


const BlogBody = () => {
    const classes = useStyles()

    const blogList = useSelector(state => state.blog.blogList)


    return (
        <div className="show-blog-area">
            <div>
                <h1>Blogs...</h1>
            </div>

            {
                blogList.map(item =>
                    <Blog item={item} key={item.id} />
                )
            }


        </div>
    );
}


export default BlogBody