/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Card, Button, Form, FormControl, Toast, Spinner, InputGroup, Col } from 'react-bootstrap'
import { CheckSquareFill, LockFill, EnvelopeFill, PersonFill } from 'react-bootstrap-icons';

export default function Login() {

    const [show, setShow] = useState(false);
    const [butttonDisable, setButtonDisable] = useState(true);
    const [spinnerDisable, setSpinnerDisable] = useState(false);
    const [blockScreen, setBlockScreen] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginDiv, setLoginDiv] = useState(true);
    const [regDiv, setRegDiv] = useState(false);


    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        switch (name) {
            case 'email1':
                setEmail(value);
                break;
            case 'password1':
                setPassword(value);
                break;
            default:
                break;
        }
        if (email.trim().length > 0 && password.length > 0) {
            setButtonDisable(false)
        }
    }

    function login() {
        setShow(true)
        setButtonDisable(true)
        setSpinnerDisable(true)
        setBlockScreen("parentDisable")
    }

    function showRegDiv() {
        setLoginDiv(false)
        setRegDiv(true)
    }

    function showLoginDiv() {
        setLoginDiv(true)
        setRegDiv(false)
    }

    return (
        <div class="col d-flex justify-content-center" style={{ backgroundColor: 'white', height: '100%', paddingTop: '100px' }}>
            {loginDiv ?
                <div style={{ height: '50%', width: '30%' }}>
                    <Card >
                        <Card.Header className="text-center">LOGIN</Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Label>Email Address </Form.Label>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><EnvelopeFill /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl required autoComplete="off" type="text" name="email1" onChange={handleChange} placeholder="Enter Email Address" />
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Label>Password </Form.Label>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><LockFill /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl required autoComplete="off" type="password" name="password1" onChange={handleChange} placeholder="Enter Password" />
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                                <p>Don't have an account? click <a href="#" onClick={showRegDiv}>here</a> to create an account.</p>
                            </Form>
                        </Card.Body>
                        <Card.Footer style={{ "text-align": "right" }}>
                            <Button size="sm" type="button1" variant="primary" onClick={login} disabled={butttonDisable}> LOGIN </Button>
                        </Card.Footer>
                    </Card>
                </div>
                : null}
            {regDiv ?
                <div style={{ height: '50%', width: '30%' }}>
                    <Card >
                        <Card.Header className="text-center">SIGN UP</Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Label>First Name</Form.Label>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><PersonFill /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl required autoComplete="off" type="text" name="firstName" placeholder="Enter First Name" />
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><PersonFill /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl required autoComplete="off" type="text" name="lastName" placeholder="Enter Last Name" />
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Label>Email Address </Form.Label>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><EnvelopeFill /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl required autoComplete="off" type="text" name="email2" placeholder="Enter Email Address" />
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Label>Password </Form.Label>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><LockFill /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl required autoComplete="off" type="password" name="password2" placeholder="Enter Password" />
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Label>Confirm Password </Form.Label>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><LockFill /></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl required autoComplete="off" type="password" name="cpassoword2" placeholder="Enter Confirm Password" />
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                                <p>Already have an account? click <a href="#" onClick={showLoginDiv}>here</a> to login.</p>
                            </Form>
                        </Card.Body>
                        <Card.Footer style={{ "text-align": "right" }}>
                            <Button size="sm" type="button" variant="primary"> SIGN UP </Button>
                        </Card.Footer>
                    </Card>
                </div>
                : null}
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
        </div >
    );
}