import * as api from '../api/user';
import { useHistory } from 'react';



export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.registerUser(post);
        dispatch({type: "CREATE_USER", payload: data});
    } catch(error) {
        console.log(error);
    }
}

export const loginPost = (post) => async (dispatch) => {
    try {
        const  res  = await api.loginUser(post);
        console.log(res.data.data.user);
         if(res.status === 200){
             if(res.data.success){
                 localStorage.setItem("token", JSON.stringify(res.data.data.accessToken));
                 localStorage.setItem("user", JSON.stringify(res.data.data.user));
                 dispatch({type: "LOGIN_USER", payload: res.data});
                 
                } 
            }else {
                console.log("Network error.")
            }
    } catch(error) {
        console.log(error);
    }
}

// export const checkUser = () => async (dispatch) => {
//     try {
       
//         const  res = await api.checkUser();
//         if(res.status === 200){
//             console.log(res.data);
//             localStorage.setItem("user", JSON.stringify(res.data.user));
//             dispatch({type: "CHECK_USER", payload: res.data.user})
//         }else {
//             console.log("Network error");
//         }
//     }catch(error) {
//         console.log(error);
//     }
// }