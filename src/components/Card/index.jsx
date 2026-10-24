import { Container } from "./styles";
import { getImages } from "../../utils/getImages";

function Card({ item, onTrailerClick }) {

    return (
        <Container>
            {onTrailerClick && <button type="button" className="poster-button" onClick={() => onTrailerClick(item)} aria-label={`Assistir trailer de ${item.title || item.name}`}>
            <img alt={item.title || item.name || 'Imagem do título'} src={getImages(item.poster_path || item.profile_path || '')} />
            </button>}
            {!onTrailerClick && <img alt={item.title || item.name || 'Imagem do título'} src={getImages(item.poster_path || item.profile_path || '')} />}
            <h3>{item.title || item.name}</h3>
            {onTrailerClick && <button type="button" className="trailer-button" onClick={() => onTrailerClick(item)}>Assistir trailer</button>}
        </Container>
    )
}

export default Card
