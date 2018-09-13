import axios from 'axios';

const Api = process.env.NODE_ENV === 'production'
  ? axios.create({
    baseURL: '/api/',
    timeout: 1000,
  })
  : axios.create({
    baseURL: 'http://127.0.0.1:4000/',
    timeout: 1000,
  });

export default Api;
