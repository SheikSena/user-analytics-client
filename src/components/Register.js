import React, { useState } from 'react';
import { Card, Button, Form, Col, Toast, Spinner, Breadcrumb } from 'react-bootstrap'
import { CheckSquareFill } from 'react-bootstrap-icons';

export default function Register() {

    const [show, setShow] = useState(false);
    const [butttonDisable, setButtonDisable] = useState(false);
    const [spinnerDisable, setSpinnerDisable] = useState(false);
    const [blockScreen, setBlockScreen] = useState('');

    function register() {
        setShow(true)
        setButtonDisable(true)
        setSpinnerDisable(true)
        setBlockScreen("parentDisable")
    }

    return (
        <div style={{ backgroundColor: 'white', height: '100%', paddingTop: '10px', paddingRight: '10px' }}>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Register</Breadcrumb.Item>
            </Breadcrumb>
            <Card bg="light" text="dark">
                <Card.Header className="text-center">REGISTER</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>
                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Button variant="primary" type="submit" disabled={butttonDisable} onClick={register}>REGISTER</Button>
                </Card.Footer>
            </Card>
            <div style={{ position: 'absolute', top: 60, right: 14 }} >
                <Toast show={show} autohide onClose={() => setShow(false)} delay={5000} closeButton>
                    <Toast.Header>
                        <CheckSquareFill fill="green" /> &nbsp;&nbsp;
                        <strong className="mr-auto" >Success</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>Logged-In Successfully</Toast.Body>
                </Toast>
            </div>
            <div className={blockScreen} width="100%"></div>
            { spinnerDisable ? <Spinner as="span" animation="border" size="lg" role="status" aria-hidden="true" style={{ "position": "fixed", "top": "50%", "left": "50%" }} /> : null}

        </div >
    );
}