// utils for utility functions

export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '54c061e2aemsh3bd75e10339a4acp108ac2jsn73ce851445d8',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
  
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}