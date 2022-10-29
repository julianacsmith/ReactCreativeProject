import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
        <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
};

export default Layout;