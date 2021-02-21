import {POST_LOGIN,POST_LOGOUT,POST_LOGOUT_AUTH,LOGIN_ERROR, POST_REGISTER,REGISTER_ERROR,USER_LOADING,USER_LOADED,AUTH_ERROR} from './types';
import axios from 'axios';

export const postLogin =(data)=>dispatch => {
        delete axios.defaults.headers.common["Authorization"];
        axios.post('http://127.0.0.1:8000/api/login/',data)
        .then(res=>{
            window.localStorage.setItem('token',res.data.token)
            console.log(localStorage.getItem('token'))
            
        })
        .then(res=>dispatch({
            type: POST_LOGIN,
            payload:res,
            
        }))
        .catch(res=> dispatch({
            type: LOGIN_ERROR,
            payload: "Dane logowania są niepoprawne",
        }))
    
}
export const postRegister = (data) => dispatch =>{
    axios.post('http://127.0.0.1:8000/api/register/',data)
    .then(res=>dispatch({
        type: POST_REGISTER,
        payload: res.data.token
    }))
    .then(res=>{
        window.localStorage.setItem('token',res.payload)
    })
    .catch(res=> dispatch(
        {
        type: REGISTER_ERROR,
        payload: "Niepoprawne dane rejestracji",
    }))}
export const postLogoutAuth = () => dispatch =>{
    dispatch({
        type: POST_LOGOUT_AUTH
    })
}
export const loadUser = (data) => (dispatch,getState) => {
    dispatch({type: USER_LOADING});
    delete axios.defaults.headers.common["Authorization"];
    axios.post('http://127.0.0.1:8000/api/login/',data)
    .then(res=>{
        console.log(data)
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    }).catch(err=>{
        dispatch({
            type: AUTH_ERROR
        })
    })
}
export const postLogout = ()=> (dispatch,getState) =>{
    let token = getState().authentication.token
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
    axios.get('http://127.0.0.1:8000/api/logout/')
    .then(res=>dispatch({
        type: AUTH_ERROR
    }))
    .then(res=>dispatch({
        type: POST_LOGOUT,
    }))
    .then(res=>{
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('username')
    })
}