import types from './blog.types'


export const createBlog = blog => {
    return {
        type: types.CREATE_BLOG,
        payload: blog
    }
}






