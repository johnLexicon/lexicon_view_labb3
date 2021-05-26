import axios from 'axios';
import { API } from './config';

const getAllPosts = async () => {
  try {
    const response = await axios.get(API);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const addPost = async (post) => {
  try {
    const addedPost = await axios.post(API, post);
    return addedPost;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const dataService = {
  getAllPosts,
  addPost,
};
