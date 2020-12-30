/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Grid, Button, Container, Typography, Link, Box } from '@material-ui/core'
import { Alert } from 'react-bootstrap'
import { connect } from 'react-redux';
import { authenticateUser } from '../services/User/Auth/AuthActions'
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 40,
    padding: '0 30px',
});

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://user-analytics.vercel.app/">
                User Aanalytics
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState
    }

    initialState = {
        email: '', password: '', error: '', displayLoginDiv: true, displayRegDiv: false, loginButtonDisabled: false
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validateUser = () => {
        this.setState({
            loginButtonDisabled: true
        })
        this.props.authenticateUser(this.state.email, this.state.password);
        setTimeout(() => {
            if (this.props.auth.isLoggedIn) {
                return this.props.history.push("/dashboard")
            } else {
                this.setState({ "error": " Invalid Email and Password", loginButtonDisabled: false })
            }
        }, 1000);
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
                    <Container component="main" maxWidth="xs">
                        <Typography component="h1" variant="h5" align='center'>LOGIN</Typography>
                        <br></br>
                        {error && <Alert variant="danger"> <ErrorOutlineIcon /> {error}</Alert>}
                        <form noValidate>
                            <Grid container spacing={0}>
                                <Grid item xs={12}>
                                    <TextField variant="outlined" margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="off"
                                        value={email}
                                        onChange={this.handleChange}
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
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
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2">Don't have an account? click <a href="#" onClick={this.showRegDiv.bind(this)}>here</a> to create an account.</Typography>
                                </Grid>
                            </Grid>
                        </form>
                        <br></br>
                        <MyButton fullWidth onClick={this.validateUser} disabled={this.state.loginButtonDisabled}>  LOGIN</MyButton >
                        <Box mt={5}>
                            <br></br>
                            <Copyright />
                        </Box>
                    </Container>
                </div> : null}
                {displayRegDiv ?
                    <div style={{ height: '50%' }}>
                        <Container component="main" maxWidth="xs">
                            <Typography component="h1" variant="h5" align='center'>SIGN UP</Typography>
                            <br></br>
                            <form noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            autoComplete="fname"
                                            name="firstName"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="lname"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email1"
                                            label="Email Address"
                                            name="email1"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="password1"
                                            label="Password"
                                            type="password"
                                            id="password1"
                                            autoComplete="current-password"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body2">Already have an account? click <a href="#" onClick={this.showLoginDiv.bind(this)}>here</a> to login.</Typography>
                                    </Grid>
                                </Grid>
                            </form>
                            <br></br>
                            <MyButton fullWidth>SIGN UP</MyButton>
                            <Box mt={5}>
                                <br></br>
                                <Copyright />
                            </Box>
                        </Container>
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