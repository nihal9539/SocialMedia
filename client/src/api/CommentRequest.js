import axios from "axios"
const API = axios.create({baseURL:"http://localhost:5000"})

export const createComment =(data)=> API.post(`/comments`,data)
export const getComments =(postId)=> API.get(`/comments/${postId}`)