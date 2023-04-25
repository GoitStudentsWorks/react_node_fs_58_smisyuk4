import axios from 'axios';

axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';

export const fetchFavorite = async () => {
	const responce = await axios.get(`recipes/favorite`);
	return responce;
};

export const addToFavorites = async id => {
	const responce = await axios.patch(`recipes/favorite/${id}`);
	return responce;
};

export const removeFromFavorites = async id => {
  const responce = await axios.delete(`recipes/favorite/${id}`);
	return responce;
};