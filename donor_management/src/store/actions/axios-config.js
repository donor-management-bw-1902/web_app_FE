import axios from 'axios';

// assuming localStorage is used to hold our token
export default (token = localStorage.getItem('AuthToken')) => axios.create({
  baseURL: 'https://donor-management.herokuapp.com/api/',
  headers: { Authorization: token }
});
