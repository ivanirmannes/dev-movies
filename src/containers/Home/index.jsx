
import { Background, Info, Poster, Container, ContainerButtons } from './styles';
import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import { getImages } from '../../utils/getImages';
import Modal from '../../components/Modal';
import { useLocation, useNavigate } from 'react-router-dom';
import { getMovies, getPopularSeries, getTopMovies, getTopPeople, getTopSeries } from '../../services/getData';

function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [featuredMovie, setFeaturedMovie] = useState(null)
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const selectedMovie = location.state?.featuredMovie
        if (!selectedMovie) return

        setFeaturedMovie(selectedMovie)
        setShowModal(Boolean(location.state.openTrailer))
        navigate('/', { replace: true, state: null })
    }, [location.state, navigate])

    useEffect(() => {
        async function getAllData() {

            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getTopPeople()
            ])
                .then(([movie, topMovies, topSeries, popularSeries, topPeople]) => {
                    setMovie(movie)
                    setTopMovies( topMovies)
                    setTopSeries(topSeries)
                    setPopularSeries(popularSeries)
                    setTopPeople(topPeople)
                })
                .catch((error) => console.error('Erro ao carregar a página inicial:', error))
            
        }
        getAllData()

    }, [])

    const heroMovie = featuredMovie || movie

    return (

        <>
            {heroMovie && (
                <Background img={getImages(heroMovie.backdrop_path)}>

                    {showModal && <Modal movieId={heroMovie.id} setShowModal={setShowModal} />}

                    <Container>
                        <Info>
                            <h1>{heroMovie.title || heroMovie.name}</h1>
                            <p>{heroMovie.overview}</p>
                            <ContainerButtons>
                                <Button red onClick={() => navigate(`/detalhe/${heroMovie.id}`)}>Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img alt={`Capa de ${heroMovie.title || heroMovie.name}`} src={getImages(heroMovie.poster_path)} />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Series'} />}
            {popularSeries && <Slider info={popularSeries} title={'Série Populares'} />}
            {topPeople && <Slider info={topPeople} title={'Top Artistas'} />}
        </>
    )

}

export default Home;
