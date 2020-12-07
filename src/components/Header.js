import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default function Header() {

    var location = window.location.href;
    var loginClass = location.includes("/login") ? "nav-item active" : "nav-item";
    var registerClass = location.includes("/register") ? "nav-item active" : "nav-item";

    return (
        <Navbar variant="dark" fixed="top" className="toppane" style={{ backgroundColor: 'black' }}>
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
            USER ANALYTICS
          </Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            <Nav>
                <Nav.Link className={loginClass} href="/login">LOGIN</Nav.Link>
                <Nav.Link className={registerClass} href="/register">SIGN UP</Nav.Link>
                <NavDropdown title="WELCOME, SHEIK SENA REDDY" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className={registerClass} >
                    <img
                        alt=""
                        src="https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        style={{ borderRadius: 400 / 2 }}
                    />{' '}
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}