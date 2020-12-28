/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Card, CardContent, Grid, Button, CardHeader } from '@material-ui/core'
import { Form, FormControl, InputGroup, Col, Alert } from 'react-bootstrap'
import { LockFill, EnvelopeFill, PersonFill } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import { authenticateUser } from '../services/User/Auth/AuthActions'
import TextField from '@material-ui/core/TextField';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState
    }

    initialState = {
        email: '', password: '', error: '', displayLoginDiv: true, displayRegDiv: false
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validateUser = () => {
        this.props.authenticateUser(this.state.email, this.state.password);
        setTimeout(() => {
            if (this.props.auth.isLoggedIn) {
                return this.props.history.push("/dashboard")
            } else {
                this.setState({ "error": "Invalid Email and Password" })
            }
        }, 500);
    }

    showLoginDiv() {
        this.setState({
            displayLoginDiv: true,
            displayRegDiv: false
        })
    }

    showRegDiv() {
        this.setState({
            displayLoginDiv: false,
            displayRegDiv: true
        })
    }

    render() {
        const { email, password, error, displayLoginDiv, displayRegDiv } = this.state;

        return (
            <div className="col d-flex justify-content-center" style={{ backgroundColor: 'white', height: '100%', paddingTop: '100px' }}>
                {displayLoginDiv ? <div style={{ height: '50%', }}>
                    {error && <Alert variant="danger"> {error}</Alert>}
                    <Grid>
                        <Grid>
                            <Card >
                                <CardHeader title="LOGIN" style={{ textAlign: 'center', 'fontWeight': 'bold' }} />
                                <CardContent>
                                    <form noValidate>
                                        <TextField variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="off"
                                            value={email}
                                            onChange={this.handleChange}
                                        />
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            value={password}
                                            onChange={this.handleChange}
                                        />
                                        <p>Don't have an account? click <a href="#" onClick={this.showRegDiv.bind(this)}>here</a> to create an account.</p>
                                    </form>
                                    <Button
                                        fullWidth
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        onClick={this.validateUser}
                                    >
                                        LOGIN
                            </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div> : null}
                {displayRegDiv ?
                    <div style={{ height: '50%' }}>
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
                                    <p>Already have an account? click <a href="#" onClick={this.showLoginDiv.bind(this)}>here</a> to login.</p>
                                </Form>
                            </Card.Body>
                            <Card.Footer style={{ "text-align": "right" }}>
                                <Button size="sm" type="button" variant="primary"> SIGN UP </Button>
                            </Card.Footer>
                        </Card>
                    </div> : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        authenticateUser: (email, password) => dispatch(authenticateUser(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);