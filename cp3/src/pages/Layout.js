import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
        <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav>
                <NavLink eventKey = "1" as = {Link} to="/">Home</NavLink>
                <NavLink eventKey = "2" as = {Link} to="/about">About</NavLink>
                <NavLink eventKey = "3" as = {Link} to="/portfolio">Portfolio</NavLink>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
};

export default Layout;