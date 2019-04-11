import axios from 'axios';

const api = axios.create({
	baseURL: 'https://omnistack-backend-clone.herokuapp.com'
});

export default api;
