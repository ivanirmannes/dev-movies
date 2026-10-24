import Catalog from '../Catalog'
import { getAiringSeries, getPopularSeries, getTopSeries } from '../../services/getData'

const sections = [
    { title: 'Séries populares', load: getPopularSeries },
    { title: 'Mais bem avaliadas', load: getTopSeries },
    { title: 'No ar', load: getAiringSeries },
]

function Series() {
    return <Catalog sections={sections} />
}

export default Series
