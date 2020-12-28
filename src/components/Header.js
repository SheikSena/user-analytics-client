import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../services/User/Auth/AuthActions'
import { persistor } from '../services/Store'
import { LockFill, PersonFill, GearFill } from 'react-bootstrap-icons';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
class Header extends Component {

    logout = () => {
        persistor.purge()
    };

    render() {

        var location = window.location.href;
        var dashboardClass = location.includes("/dashboard") ? "white" : "";


        const userLinks = (
            <>
                <Nav>
                    <Nav.Link href="" style={{ color: "white" }}><Badge badgeContent={4} color="primary"><NotificationsIcon /></Badge></Nav.Link>
                    <NavDropdown title="WELCOME, SHEIK SENA REDDY" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1"><PersonFill /> Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2"><GearFill /> Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#" onClick={this.logout}> <LockFill /> Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav >
                {' '}
                <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg" />
            </>
        )

        const navBarLinks = (
            <>
                <Nav className="mr-auto">
                    <Nav.Link href="/dashboard" style={{ color: dashboardClass }}>Dashboard</Nav.Link>
                </Nav>
            </>
        )

        return (
            <Navbar variant="dark" expand="lg" fixed="top" className="toppane">
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
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    {this.props.auth.isLoggedIn ? navBarLinks : null}
                    {this.props.auth.isLoggedIn ? userLinks : null}
                </NavbarCollapse>
            </Navbar >
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};


const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);