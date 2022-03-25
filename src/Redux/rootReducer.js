import { combineReducers } from 'redux';
import blogReducer from './Blog/blog.reducer';
import loginReducer from './Login/login.reducer';


export default combineReducers({
    blog: blogReducer,
    user: loginReducer
})