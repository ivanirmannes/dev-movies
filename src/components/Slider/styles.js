
import styled from "styled-components";


export const Container = styled.div`
background: #000;
padding: 0 20px;
overflow: hidden;

h2 {
    color: #fff;
    font-size: 24px;
    margin: 50px 0 20px 20px;

}

 .swiper { padding: 0 0 16px; }
 .swiper-wrapper { align-items: stretch; }
 .swiper-slide { width: 260px; height: auto; }

 @media (max-width: 600px) {
   padding: 0 12px;
   h2 { margin-left: 8px; font-size: 21px; }
   .swiper-slide { width: 190px; }
 }
`


