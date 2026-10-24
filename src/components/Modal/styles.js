import styled from "styled-components";

export const Background = styled.div`
    position: fixed;
    inset: 0;
    z-index: 999;
    padding: 24px;
    background-color: rgba(0, 0, 0, 0.78);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    position: relative;
    width: min(100%, 1200px);
    padding: 56px 16px 16px;
    border-radius: 8px;
    background: #000;

    iframe {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        height: auto;
        border: none;
    }

    @media (max-width: 600px) {
        padding: 52px 8px 8px;
    }
`

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 12px;
    z-index: 1;
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, 0.65);
    border-radius: 50%;
    background: #222;
    color: #fff;
    cursor: pointer;

    span { font-size: 30px; line-height: 1; }
    &:hover { background: #e50914; }
    &:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }
`

export const Message = styled.p`
    min-height: 220px;
    display: grid;
    place-items: center;
    padding: 20px;
    color: #fff;
    text-align: center;
`
