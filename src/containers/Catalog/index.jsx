import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from '../../components/Slider'
import { Message, Page } from './styles'

function Catalog({ sections, enableTrailers = false }) {
    const [catalog, setCatalog] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        let active = true

        async function loadCatalog() {
            setLoading(true)
            setError(false)
            const results = await Promise.allSettled(sections.map(({ load }) => load()))
            if (!active) return

            const nextCatalog = {}
            results.forEach((result, index) => {
                if (result.status === 'fulfilled') nextCatalog[sections[index].title] = result.value
            })
            setCatalog(nextCatalog)
            setError(results.every((result) => result.status === 'rejected'))
            setLoading(false)
        }

        loadCatalog()
        return () => { active = false }
    }, [sections])

    if (loading) return <Page><Message role="status">Carregando títulos…</Message></Page>
    if (error) return <Page><Message role="alert">Não foi possível carregar o catálogo. Confira sua conexão e tente novamente.</Message></Page>

    function showMovieTrailer(movie) {
        navigate('/', { state: { featuredMovie: movie, openTrailer: true } })
    }

    return (
        <Page>
            {sections.map(({ title }) => catalog[title]?.length > 0
                ? <Slider key={title} info={catalog[title]} title={title} onTrailerClick={enableTrailers ? showMovieTrailer : undefined} />
                : <Message key={title}>Nenhum título disponível em “{title}”.</Message>)}
        </Page>
    )
}

export default Catalog
