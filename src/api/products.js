import axios from 'axios';


export const fetchProduct = () => axios.get("https://fakestoreapi.com/products");