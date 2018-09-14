import axios from 'axios';
import NavigationService from './NavigationService';

const Api = process.env.NODE_ENV === 'production'
  ? axios.create({
    baseURL: '/api/',
    timeout: 1000,
  })
  : axios.create({
    baseURL: 'http://10.0.2.2:4000/',
    timeout: 1000,
  });

Api.interceptors.response.use(k => k, function (error) {
  // Do something with response error
  if (error.response.status === 404) {
    NavigationService.navigate('Login');
  }
  return Promise.reject(error);
});

export default Api;
