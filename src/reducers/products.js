// import { STATES } from "mongoose";

const productReducer = (products = [], action) => {
    switch(action.type) {
        case "FETCH_ALL":
            return action.payload
        case "CREATE_PRODUCT":
            return [
                ...products,
                action.payload
            ]
        default: 
           return products; 
    }
}

export default productReducer;