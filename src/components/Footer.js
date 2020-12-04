import React from 'react';
import { Navbar, Container, NavbarBrand } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
class Footer extends React.Component {
    render() {
        return (
            <div className="fixed-bottom" style={{ backgroundColor: 'black' }}>
                <Navbar color="dark" dark >
                    <Container>
                        <NavbarBrand>Footer</NavbarBrand>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
export default Footer;