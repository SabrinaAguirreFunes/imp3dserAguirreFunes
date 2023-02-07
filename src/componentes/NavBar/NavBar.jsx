import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
            <Container>
                <NavLink to='/'>
                    <img className="logoNavBar" src='/img/logo.jpeg' alt='logo' />
                    Imp3D - Servicios de impresiones</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><NavLink to='/nosotros'>Nosotros</NavLink></Nav.Link>
                    <Nav.Link><NavLink to='/proceso'>Proceso</NavLink></Nav.Link>
                    <NavDropdown title="Productos" id="collasible-nav-dropdown">
                    <NavDropdown.Item><NavLink to='/categoria/hotTrending'>Hot Trending</NavLink></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><NavLink to='/categoria/tradicionales'>Línea tradicional</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink to='/categoria/personalizados'>Línea personalizada</NavLink></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link> <NavLink to='/contacto'>Contacto</NavLink></Nav.Link>
                </Nav>
                <Nav>
                    <NavLink to='/cart'><CartWidget/></NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar