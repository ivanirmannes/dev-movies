
import { Link, useLocation } from 'react-router-dom'
import { Container, Menu, Li } from './styles'
import Logo from '../../assets/logo.png'
import { useEffect, useState } from 'react'

function Header() {
    const [changeBackground, setChangeBackground] = useState(false)
    const { pathname } = useLocation()

    useEffect(() => {
        const updateBackground = () => setChangeBackground(window.scrollY > 150)
        updateBackground()
        window.addEventListener('scroll', updateBackground, { passive: true })
        return () => window.removeEventListener('scroll', updateBackground)
    }, [])

    return <Container $changeBackground={changeBackground} >

        <img src={Logo} alt='logo-dev-movies' />

        <Menu>

            <Li $isActive={pathname === '/'}>
                <Link to="/">Home</Link>
            </Li>
            <Li $isActive={pathname.includes('filmes')}>
                <Link to="/filmes">Filmes</Link>
            </Li>
            <Li $isActive={pathname.includes('series')}>
                <Link to="/series">Séries</Link>
            </Li>



        </Menu>
    </Container>


}
export default Header
