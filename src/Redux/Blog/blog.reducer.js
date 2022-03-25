import types from './blog.types'

const initialState = {
    blogList: []
}

const blogReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case types.CREATE_BLOG:
            return {
                ...state,
                blogList: [...state.blogList, payload]
            }

        default:
            return state
    }
}


export default blogReducer
