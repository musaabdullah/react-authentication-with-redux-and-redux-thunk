import axios from 'axios';

const url = "http://localhost:4000/";
  function authHeader() {
    const user = JSON.parse(localStorage.getItem('token'));
  
    if (user && user.accessToken) {
      // for Node.js Express back-end
      return { 'x-access-token': user };
    } else {
      return {};
    }
  }
  
// const 
export const registerUser = (userData) => axios.post(url+"register",userData);
export const loginUser = (userData) => axios.post(url+"login", userData);
// export const checkUser = () => axios.get("checkUser", {headers: authHeader()});
