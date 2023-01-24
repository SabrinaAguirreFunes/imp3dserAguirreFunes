import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
            <Container>
                <Navbar.Brand href="#home">
                    <img className="logoNavBar" src='../../../public/img/logo.jpeg' alt='logo' />
                    Imp3D - Servicios de impresiones</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                    <Nav.Link href="#proceso">Proceso</Nav.Link>
                    <NavDropdown title="Productos" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#hottrending">Hot Trending</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#traadicionales">Línea tradicional</NavDropdown.Item>
                    <NavDropdown.Item href="#personalizados">Línea personalizada</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#carrito"><CartWidget/></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar