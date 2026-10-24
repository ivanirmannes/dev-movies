import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY || 'aac1a370d476c301ce2fe809bee991d6',
    language: 'pt-BR',
    page: 1,
  },
});

export default api
