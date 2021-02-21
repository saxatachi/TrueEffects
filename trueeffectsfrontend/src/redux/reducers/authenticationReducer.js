import {POST_LOGIN,USER_LOADED,AUTH_ERROR,LOGIN_ERROR,POST_REGISTER, REGISTER_ERROR,POST_LOGOUT_AUTH, USER_LOADING} from '../actions/types';
const initialState = {
    token: localStorage.getItem('token'),
    name: localStorage.getItem('name'),
    isAuthenticated: null,
    error: '',
    error_register: '',
    tokenloaded: false
};
export default function authreducer(state=initialState,action){
    switch(action.type){
        case POST_LOGIN:
            return{
                ...state,
                token:action.payload,
                tokenloaded: true,
                error: ''
            }
        case LOGIN_ERROR:
            return{
                ...state,
                error:action.payload
            }
        case POST_REGISTER:
            return{
                ...state,
                token:action.payload,
                tokenloaded: true,
            }
        case REGISTER_ERROR:
            return{
                ...state,
                error_register:action.payload
            }
        case POST_LOGOUT_AUTH:
            return{
                ...state,
                token: '',
                tokenloaded: false
            }
        case USER_LOADING:
            return{
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return{
                ...state,
                isLoaded: true,
                isAuthenticated: true,  
                token: action.payload.token,
                name: action.payload.name
            }
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                user: null,
                isAuthenticated:false,
                isLoading: false
            }

        default: 
            return state;
    }
}