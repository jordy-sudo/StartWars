// api/api.js
const API_URL = 'https://swapi.dev/api/';

export const getSwapi = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getSwapiUrl = async (endpoint) => {
    try {
      const response = await fetch(`${endpoint}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };