import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dtmoney-rocketseat-taupe.vercel.app/api'
})