import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://g9jnsbaah7.execute-api.us-west-2.amazonaws.com/alquimia/api',
  headers: {
    'x-api-key': 'HrXntLTNKc3hthxnZf01Pant6jf1ixwb9ftB5MH3',
    'Content-Type': 'application/json',
  },
})