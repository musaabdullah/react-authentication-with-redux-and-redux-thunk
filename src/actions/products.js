import * as api from '../api/products';


export const getProducts = () => async (dispatch) => {
    try {
        const res = await api.fetchProduct();
         if(res.status === 200) {
            dispatch({type:"FETCH_ALL", payload:res.data});
         }else {
             console.log("Network error");
         }
    } catch(error) {
        console.log(error.message)
    }
}