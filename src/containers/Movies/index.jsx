import Catalog from '../Catalog'
import { getPopularMovies, getTopMovies, getUpcomingMovies } from '../../services/getData'

const sections = [
    { title: 'Filmes populares', load: getPopularMovies },
    { title: 'Mais bem avaliados', load: getTopMovies },
    { title: 'Em breve', load: getUpcomingMovies },
]

function Movies() {
    return <Catalog sections={sections} enableTrailers />
}

export default Movies
