
import axios from 'axios';
const DEPLOYED = 'cryptoin-server-production-6bc2.up.railway.app';
const LOCALHOST = 'http://localhost:5454';


const API_BASE_URL = "cryptoin-server-production-6bc2.up.railway.app"

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;

