import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"

export const NavBar = () => {
    return(
        <>  
            <Navbar className="navbar navbar-dark bg-primary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="logo"
                            alt="logo"
                            src="https://cdn-icons-png.flaticon.com/128/4049/4049083.png"
                            width="80"
                            height="80"
                        />{' '}
                        Fútbol Maniatic
                    
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link  href="#guantes"><font color="#FFFFFF">Guantes de portero</font></Nav.Link>
                        <Nav.Link className="paginasNav" href="#botas"><font color="#FFFFFF">Botas de fútbol</font></Nav.Link>
                        <Nav.Link className="paginasNav" href="#equipacion"><font color="#FFFFFF">Equipaciónes</font></Nav.Link>
                        <Nav.Link className="paginasNav" href="#accesorios"><font color="#FFFFFF">Accesorios</font></Nav.Link>
                    </Nav>
                <CartWidget />
                </Container>
            </Navbar>
        </>
    )
}
