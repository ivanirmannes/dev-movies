import { useEffect, useState } from "react";
import { Container, Background, CloseButton, Message } from "./styles";
import { getMovieVideos, getSeriesVideos } from "../../services/getData";

function Modal({ mediaId, mediaType = 'movie', setShowModal  }) {
    const [video, setVideo] = useState(null)
    const [status, setStatus] = useState('loading')

    useEffect(() => {
        let active = true
        async function loadVideo() {
            setStatus('loading')
            setVideo(null)
            try {
                const videos = mediaType === 'tv'
                    ? await getSeriesVideos(mediaId)
                    : await getMovieVideos(mediaId)
                const youtubeVideos = videos.filter((item) => item.site === 'YouTube')
                const selectedVideo = youtubeVideos.find((item) => item.type === 'Trailer')
                    || youtubeVideos.find((item) => item.type === 'Teaser')
                    || youtubeVideos[0]
                if (!active) return
                setVideo(selectedVideo || null)
                setStatus(selectedVideo ? 'ready' : 'empty')
            } catch (error) {
                if (!active) return
                console.error('Erro ao carregar o trailer:', error)
                setStatus('error')
            }
        }
        loadVideo()
        return () => { active = false }
    }, [mediaId, mediaType])

    useEffect(() => {
        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setShowModal(false)
        }
        window.addEventListener('keydown', closeOnEscape)
        return () => window.removeEventListener('keydown', closeOnEscape)
    }, [setShowModal])

    return (
        <Background onClick={() => setShowModal(false)}>
        <Container onClick={(event) => event.stopPropagation()}>
            <CloseButton type="button" aria-label="Fechar trailer" title="Fechar trailer" onClick={() => setShowModal(false)}>
                <span aria-hidden="true">×</span>
            </CloseButton>
            {status === 'loading' && <Message role="status">Carregando trailer…</Message>}
            {status === 'empty' && <Message role="status">Não encontramos um trailer disponível para {mediaType === 'tv' ? 'esta série' : 'este filme'}.</Message>}
            {status === 'error' && <Message role="alert">Não foi possível carregar o trailer. Tente novamente mais tarde.</Message>}
            {status === 'ready' && <iframe
                src={"https://www.youtube-nocookie.com/embed/" + video.key + "?autoplay=1"}
                title={video.name || (mediaType === 'tv' ? 'Trailer da série' : 'Trailer do filme')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />}
        </Container>
        </Background>
    )
}

export default Modal
