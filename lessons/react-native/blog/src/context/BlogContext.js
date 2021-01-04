import createDataContext from './createDataContext'
import server from '../api/server'

const blogReducer = (state, action) => {
    switch(action.type) {
        // case 'add_blogpost':
        //     return [
        //         ...state,
        //         {
        //             id: Math.floor(Math.random() * 999999),
        //             title: action.payload.title,
        //             content: action.payload.content
        //         }
        //     ];

        case 'delete_blogpost':
            return state.filter((blog) => blog.id !== action.payload.id)

        case 'edit_blogpost':
            return state.map((blog) => {
                return blog.id === action.payload.id
                ? action.payload
                : blog
            })

        case 'get_blogposts':
            return action.payload;

        default:
            return state;
    }
} 

const getBlogPosts = dispatch => {
    return async () => {
        const response = await server.get('/blogposts');

        dispatch({ type: 'get_blogposts', payload: response.data })
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await server.post('/blogposts', { title, content })

        callback ? callback() : null;
    }
}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await server.delete(`/blogposts/${id}`);
        dispatch({ type: "delete_blogpost", payload: { id } })
    }
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await server.put(`/blogposts/${id}`, { title, content });
        dispatch({ type: "edit_blogpost", payload: { id, title, content } })
        callback ? callback() : null;
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
    [] 
);