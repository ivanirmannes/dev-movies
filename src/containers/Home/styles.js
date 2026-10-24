import styled from 'styled-components';

export const Background = styled.div`
    background-image: url(${(props) => props.$img});
    min-height: 100vh;
    min-height: 100svh;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

`
export const Container = styled.div` 
display: flex;
align-items: center;
justify-content: space-around;
height: 100%;
max-width: 1500px;
width: 100%;
padding: 80px 24px 24px;

@media (max-width: 760px) {
    height: auto;
    min-height: 100vh;
    min-height: 100svh;
    flex-direction: column-reverse;
    justify-content: center;
    gap: 8px;
    padding: 90px 18px 32px;
}
`

export const Info = styled.div`

z-index: 2;
padding: 20px;
width: 50%;
min-width: 0;

@media (max-width: 760px) {
    width: 100%;
    padding: 12px 4px;
    text-align: center;
}

h1 {
    font-size: clamp(2.3rem, 5vw, 5rem);
    font-weight: 700;
    color: #fff;
}

p {
    font-size: clamp(16px, 1.5vw, 20px);
    font-weight: 500;
    color: #fff;
    margin-top: 30px;
    margin-bottom: 20px;
}
`

export const Poster = styled.div`
z-index: 2;
img {
   width: min(400px, 30vw);
   border-radius: 30px;
   

}

@media (max-width: 760px) {
    img { width: min(150px, 35vw); border-radius: 16px; }
}
`
export const ContainerButtons = styled.div`
display: flex;
gap: 20px;
margin-top: 30px;
flex-wrap: wrap;

@media (max-width: 760px) {
    justify-content: center;
    gap: 12px;
    button { font-size: 16px; padding: 9px 14px; }
}
`
