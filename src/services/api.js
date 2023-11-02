import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api-foodexplorer-58lk.onrender.com',
  withCredentials:true
});