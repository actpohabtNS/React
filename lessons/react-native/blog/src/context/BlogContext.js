import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'add_blogpost':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 999999),
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];

        case 'delete_blogpost':
            return state.filter((blog) => blog.id !== action.payload.id)

        case 'edit_blogpost':
            return state.map((blog) => {
                return blog.id === action.payload.id
                ? action.payload
                : blog
            })

        default:
            return state;
    }
} 

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: "add_blogpost", payload: {title, content} });
        callback ? callback() : null;
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: "delete_blogpost", payload: { id } })
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({ type: "edit_blogpost", payload: { id, title, content } })
        callback ? callback() : null;
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{id: 1, title: "TEST BLOG", content: "CONTENT OF A TEST BLOG POST"}] 
);