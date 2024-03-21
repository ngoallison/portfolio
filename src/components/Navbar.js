import { Row, Col, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Icons from "./Icons";
import { images } from "./Constants";
import { FaDivide } from "react-icons/fa";


function Navigation() {
  return (
    <>
      <Navbar className="navbar" yle={{ backgroundColor: "white", borderBottom: "1px solid gray" }}>
        <div style={{ display: "flex", alignItems: "center", width: "80%", margin: "0 auto" }}>
          <Navbar.Brand href="#home"><img
            src={images.brand}
            style={{
              height: 80,
            }}
            alt="pic"
          ></img></Navbar.Brand>

          <Nav className="justify-content-end flex-grow-1 gap-3">
            <Nav.Link href="#home"><h5>Home</h5></Nav.Link>
            <Nav.Link href="#experience"><h5>Experience</h5></Nav.Link>
            <Nav.Link href="#projects"><h5>Projects</h5></Nav.Link>
            {/* <Nav.Link href="#resume">Resume</Nav.Link> */}
            <Nav.Link href="#contact"><h5>Contact</h5></Nav.Link>
          </Nav>
          <Icons></Icons>
        </div>
      </Navbar>
    </>
  );
}

export default Navigation;
