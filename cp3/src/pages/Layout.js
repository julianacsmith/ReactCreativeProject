import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
        <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className = "mr-auto">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <Link class="nav-link" to="/">Home</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/about">About</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/portfolio">Portfolio</Link>
                      </li>
                    </ul>
                </div>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
};

export default Layout;