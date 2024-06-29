import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const  NavbarCust= ()=> {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">Chemical Reactors</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Reactors" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/batch">Batch Reactor</NavDropdown.Item>
              <NavDropdown.Item href="/cstr">
                Continuous Stirred Reactor
              </NavDropdown.Item>
              <NavDropdown.Item href="/plugf">Plug Flow Reactor</NavDropdown.Item>
              <NavDropdown.Item href="/pbr">
                Packed Bed Reactor
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Nav>
            <Nav.Link href="/team">Team</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCust;