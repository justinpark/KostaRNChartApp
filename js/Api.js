import axios from 'axios';

const Api = process.env.NODE_ENV === 'production'
  ? axios.create({
    baseURL: '/api/',
    timeout: 1000,
  })
  : axios.create({
    baseURL: 'http://10.0.2.2:4000/',
    timeout: 1000,
  });

export default Api;
