/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Card, CardContent, Grid, Button, CardHeader } from '@material-ui/core'
import { Alert } from 'react-bootstrap'
import { connect } from 'react-redux';
import { authenticateUser } from '../services/User/Auth/AuthActions'
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 40,
    padding: '0 30px',
});
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
            <div className="col d-flex justify-content-center" style={{ backgroundColor: 'white', height: '100%', paddingTop: '70px' }}>
                {displayLoginDiv ? <div style={{ height: '50%' }}>
                    {error && <Alert variant="danger"> {error}</Alert>}
                    <Grid>
                        <Grid justify="space-between"
                            alignItems="center">
                            <Card >
                                <CardHeader title="LOGIN" style={{ textAlign: 'center', 'fontWeight': 'bold' }} />
                                <CardContent>
                                    <form noValidate>
                                        <TextField variant="outlined" margin="normal"
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
                                    <MyButton
                                        fullWidth
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        onClick={this.validateUser}
                                    >
                                        LOGIN
                            </MyButton >
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div> : null}
                {displayRegDiv ?
                    <div style={{ height: '50%' }}>
                        <Grid>
                            <Grid justify="space-between"
                                alignItems="center" >
                                <Card >
                                    <CardHeader title="SIGN UP" style={{ textAlign: 'center', 'fontWeight': 'bold' }} />
                                    <CardContent>
                                        <form noValidate>
                                            <TextField variant="outlined" margin="normal"
                                                required
                                                fullWidth
                                                id="firstName"
                                                label="First Name"
                                                name="firstName"
                                                autoComplete="off"
                                                type="text"
                                            />
                                            <TextField variant="outlined" margin="normal"
                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                name="lastName"
                                                autoComplete="off"
                                                type="text"
                                            />
                                            <TextField variant="outlined" margin="normal"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email2"
                                                autoComplete="off"
                                                type="email"
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                name="password1"
                                                label="Password"
                                                type="password"
                                                id="password1"
                                                autoComplete="current-password1"
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                name="password2"
                                                label="Confirm Password"
                                                type="password"
                                                id="password2"
                                                autoComplete="current-password2"
                                            />
                                            <p>Already have an account? click <a href="#" onClick={this.showLoginDiv.bind(this)}>here</a> to login.</p>
                                        </form>
                                        <MyButton
                                            fullWidth
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                        >
                                            SIGN UP
                            </MyButton>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
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