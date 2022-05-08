import axios from 'axios'
const url = 'http://localhost:5000/posts'
export const fecthPosts = () => axios.get(url)
export const creatPost = (newPost) => axios.post(url, newPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`)
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost)
