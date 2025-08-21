import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://g9jnsbaah7.execute-api.us-west-2.amazonaws.com/alquimia/',
  headers: {
    'x-api-key': 'HrXntLTNKc3hthxnZf01Pant6jf1ixwb9ftB5MH3',
    'Content-Type': 'application/json',
  },
})

export const postApi = async (body: { province: string; name: string }) => {
  const { data } = await api.post('/api', body)
  return data
}

export const postLogin = async (body: { email: string; }) => {
  const { data } = await api.post('/login', body)
  return data
}