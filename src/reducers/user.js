const initState = {
    user:{}
}


const userReducer = (state = initState, action) => {
    switch(action) {
        case "CREATE_USER":
            return {
                ...state,
                user: action.payload.user
            } 
        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload.user
            }    
        case "CHECK_USER":
            return  {
                user: action.payload.user
            }
        case "GET_DATA":
            return state;
        default: 
         return state;
    }
}
export default userReducer;