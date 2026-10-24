
import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100%;
padding: 0 8px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
img{
    border-radius: 30px;
    width: 100%;
    max-width: 260px;
    aspect-ratio: 2 / 3;
    object-fit: cover;
}

.poster-button {
    width: 100%;
    max-width: 260px;
    padding: 0;
    border: 0;
    border-radius: 30px;
    background: transparent;
    cursor: pointer;
    overflow: hidden;
}

.poster-button img { display: block; transition: transform 180ms ease; }
.poster-button:hover img { transform: scale(1.04); }
.poster-button:focus-visible, .trailer-button:focus-visible { outline: 3px solid #fff; outline-offset: 4px; }

h3{
    color: #fff;
    margin-top: 15px;
    max-width: 260px;
    min-height: 3.6em;
    text-align: center;
    line-height: 1.2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}

.trailer-button {
    margin-top: auto;
    flex-shrink: 0;
    padding: 8px 14px;
    border: 1px solid #e50914;
    border-radius: 20px;
    background: #e50914;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
}
.trailer-button:hover { background: #b80710; }
`
    




