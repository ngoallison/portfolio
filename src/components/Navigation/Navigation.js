import { Nav, Navbar, Container, Image } from "react-bootstrap";
import Icons from "../Items/Icons";
import { images } from "../Constants";


const Navigation = () => {
  return (

    <Navbar collapseOnSelect expand="md" className="p-1" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src={images.brand}
            style={{
              height: 50,
            }}
            alt="pic"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Icons></Icons>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
