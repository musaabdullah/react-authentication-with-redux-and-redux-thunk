import axios from 'axios';

const url = "http://localhost:4000/";

export const fetchProduct = () => axios.get(url+"products");
export const createProduct = (newProduct) => axios.post(url+"products", newProduct);