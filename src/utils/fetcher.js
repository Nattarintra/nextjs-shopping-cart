import axios from 'src/utils/axios';

export const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const fetcherPost = async (url) => {
  const response = await axios.post(url);
  return response.data;
};
