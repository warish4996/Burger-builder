import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-347be.firebaseio.com/'
});

export default instance;