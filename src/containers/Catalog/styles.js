import styled from 'styled-components'

export const Page = styled.main`
    min-height: 100vh;
    padding: 110px 0 50px;
    background: #000;

    @media (max-width: 480px) { padding-top: 86px; }
`

export const Message = styled.p`
    color: #fff;
    padding: 28px clamp(16px, 5vw, 40px);
    font-size: 18px;
`
