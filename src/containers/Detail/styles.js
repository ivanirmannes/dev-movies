
import styled, { keyframes } from "styled-components";

const scale = keyframes `
    from {
        transform: scale(0)
    }
     to {
        transform: scale(1)
     }   
`

export const Background = styled.div`
    background-image: url(${(props) => props.image});
    height: 50vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;


    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 120px;
        background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
        content: '';
    }
`



export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    max-width: 1500px;
    margin-top: -100px;

    @media (max-width: 760px) {
        flex-direction: column;
        align-items: center;
        margin-top: -60px;
        padding: 0 16px;
    }
    
`

export const Cover = styled.div`
    padding: 20px;
    display: flex;
    align-items: flex-start;
    height: 100%;
    z-index: 99;

img {
    width: min(500px, 40vw);
    border-radius: 30px;
    box-shadow: rgb(100 100 11 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
    
}

@media (max-width: 760px) {
    justify-content: center;
    padding: 12px;
    img { width: min(210px, 55vw); border-radius: 18px; }
}
`
export const Info = styled.div`
    padding: 20px;
    width: 50%;
    z-index: 99;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media (max-width: 760px) { width: 100%; padding: 12px 4px; }


    h2 {
        font-size: clamp(30px, 5vw, 50px);
        font-weight: 700;
        color: #fff;
    }

    p {
    font-weight: 700;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 30px;   
    }
`
export const ContainerMovies = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100%;

    div {
     display: flex;
     flex-direction: column;
     max-width: 1000px;
     width: 100%; 
     height: 100%;
     margin: 20px 0;
    }

    h4 {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    iframe {
        border: none;
        width: 100%;
        aspect-ratio: 16 / 9;
        height: auto;
    }

    @media (max-width: 600px) { padding: 12px; h4 { font-size: 16px; } }
`
