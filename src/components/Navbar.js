import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Icons from "./Icons";
import { images } from "./Constants";


const Navigation = () => {
  return (
    <Navbar fixed="top" className="p-1">
      <div className="nav-wrapper">
        <div className="nav">

          <Navbar.Brand href="#home">
            <img
              src={images.brand}
              style={{
                height: 50,
              }}
              alt="pic"
            >
            </img>
          </Navbar.Brand>
          <div className="navbar-links">
            <Nav.Link href="#home"><h5>Home</h5></Nav.Link>
            <Nav.Link href="#experience"><h5>Experience</h5></Nav.Link>
            <Nav.Link href="#projects"><h5>Projects</h5></Nav.Link>
            <Nav.Link href="#skills"><h5>Skills</h5></Nav.Link>
            <Nav.Link href="#contact"><h5>Contact</h5></Nav.Link>
            <Icons></Icons>
          </div>

        </div>
      </div>
    </Navbar>
  );
}

export default Navigation;
