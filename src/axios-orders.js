import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerapp-94f9e.firebaseio.com/'
})

export default instance;