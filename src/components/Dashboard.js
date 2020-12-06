import React, { useState } from 'react';
import { Card, Button, Form, Row, Col, Image, Toast, Spinner, Breadcrumb } from 'react-bootstrap'
import { CheckSquareFill } from 'react-bootstrap-icons';

export default function Login() {

    const [show, setShow] = useState(false);
    const [butttonDisable, setButtonDisable] = useState(false);
    const [spinnerDisable, setSpinnerDisable] = useState(false);
    const [blockScreen, setBlockScreen] = useState('');

    function login() {
        setShow(true)
        setButtonDisable(true)
        setSpinnerDisable(true)
        setBlockScreen("parentDisable")
    }

    return (
        <div style={{ backgroundColor: 'white', height: '100%', paddingTop: '10px', paddingRight: '10px' }}>
            <Card bg="light" text="dark">
                <Card.Header className="text-center">LOGIN</Card.Header>
                <Card.Body>
                    <Row>
                        <Col xs={6}>
                            <Image src="https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg" rounded width="500" height="300" />
                        </Col>
                        <Col xs={6}>
                            <Form>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>Email address </Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Form>
                            <Button variant="primary" onClick={login} type="submit" disabled={butttonDisable}>
                                LOGIN
                        </Button>
                        </Col>
                    </Row>
                </Card.Body>
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
            {spinnerDisable ? <Spinner as="span" animation="border" size="lg" role="status" aria-hidden="true" style={{ "position": "fixed", "top": "50%", "left": "50%" }} /> : null}
        </div>
    );
}