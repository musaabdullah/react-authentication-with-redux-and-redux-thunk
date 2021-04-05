const productReducer = (products = [], action) => {
    switch(action.type) {
        case "FETCH_ALL":
            return action.payload
        default: 
           return products; 
    }
}

export default productReducer;