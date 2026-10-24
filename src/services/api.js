import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'aac1a370d476c301ce2fe809bee991d6',
    language: 'pt-BR',
    page: 1,
  },
});

export default api