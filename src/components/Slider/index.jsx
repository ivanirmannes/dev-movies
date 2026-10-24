
import { Container } from "./styles";
import { Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import Card from "../Card"


function Slider({ info, title, onTrailerClick }) {

    return (
        <Container>
        <h2>{title}</h2>
        <Swiper
        grabCursor
        slidesPerView={'auto'}
        className="swiper"
        >
            {info?.map((item) => (
                <SwiperSlide key={item.id}>
                   <Card item={item} onTrailerClick={onTrailerClick} />
                </SwiperSlide>
           ))}
        </Swiper>
        </Container>
    )
}

export default Slider
