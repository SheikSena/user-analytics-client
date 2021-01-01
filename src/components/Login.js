/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Grid, Button, Container, Typography, Link, Box, TextField, styled } from '@material-ui/core'
import { Alert, Toast, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux';
import { authenticateUser, onPageLoad } from '../services/User/Auth/AuthActions'
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
                User Analytics
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// eslint-disable-next-line no-useless-escape
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState
    }

    initialState = {
        email: '', password: '', error: '', displayLoginDiv: true, displayRegDiv: false, loginButtonDisabled: false, open: false, toastHeader: '', toastMessage: '',
        email1: '', fname: '', lname: '', password1: '',
        email1Error: '', fnameError: '', passwordError: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        this.props.onPageLoad()
    }

    handleSignup = event => {
        event.preventDefault();
        const { name, value } = event.target;
        switch (name) {
            case 'firstName':
                if (value.trim().length === 0) {
                    this.setState({ fnameError: "First Name can't be empty" })
                } else {
                    this.setState({ fname: value, fnameError: '' })
                }
                break;
            case 'email1':
                if (value.trim().length === 0) {
                    this.setState({ email1Error: "Email Address can't be empty" })
                } else if (!validEmailRegex.test(value)) {
                    this.setState({ email1Error: "Please enter a valid Email Address" })
                } else {
                    this.setState({ email1: value, email1Error: '' })
                }
                break
            case 'password1':
                if (value.trim().length === 0) {
                    this.setState({ passwordError: "Password can't be empty" })
                } else if (value.trim().length < 5) {
                    this.setState({ passwordError: "Password should be of minimum 5 characters" })
                } else {
                    this.setState({ password1: value, passwordError: '' })
                }
                break;
            default:
                break
        }
    }

    signUp = (event) => {
        if (this.state.fnameError.length > 0 || this.state.email1Error.length > 0 || this.state.passwordError.length > 0) {
            // this.setState({ "error": "Please Enter Valid Form Values and Try Again", loginButtonDisabled: false })
            event.preventDefault();
        } else if (this.state.fname.trim().length === 0 || this.state.email1.trim().length === 0 || this.state.password1.trim().length === 0) {
            this.setState({ "error": "Please Enter Required Fields and Try Again", loginButtonDisabled: false })
            event.preventDefault();
        }
    }

    validateUser = () => {
        this.props.authenticateUser(this.state.email, this.state.password);
    }

    showLoginDiv() {
        this.setState({
            displayLoginDiv: true,
            displayRegDiv: false,
            error: ''
        })
    }

    closeToaster() {
        this.setState({
            open: false
        })
    }

    showRegDiv() {
        this.setState({
            displayLoginDiv: false,
            displayRegDiv: true,
            error: ''
        })
    }

    render() {
        const { email, password, error, displayLoginDiv, displayRegDiv, open, toastHeader, toastMessage } = this.state;
        return (
            <div className="col d-flex justify-content-center" style={{ backgroundColor: 'white', height: '100%', paddingTop: '70px' }}>
                {displayLoginDiv ? <div style={{ height: '50%' }}>
                    <Container component="main" maxWidth="xs">
                        <Typography component="h1" variant="h5" align='center'>LOGIN</Typography>
                        <br></br>
                        {this.props.auth.error && <Alert variant="danger"> <ErrorOutlineIcon /> {this.props.auth.error}</Alert>}
                        <form noValidate>
                            <Grid container spacing={0}>
                                <Grid item xs={12}>
                                    <TextField variant="outlined" margin="normal"
                                        required={true}
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
                        <MyButton fullWidth onClick={this.validateUser} disabled={this.props.auth.buttonDiabled}>  LOGIN  &nbsp; {this.props.auth.buttonDiabled ? <Spinner as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true" />
                            : null}</MyButton >
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
                            {error && <Alert variant="danger"> <ErrorOutlineIcon /> {error}</Alert>}
                            <form noValidate onSubmit={this.signUp.bind(this)}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            error={this.state.fnameError.length > 0}
                                            autoComplete="fname"
                                            name="firstName"
                                            variant="outlined"
                                            required={true}
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                            helperText={this.state.fnameError}
                                            onChange={this.handleSignup}
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
                                            error={this.state.email1Error.length > 0}
                                            helperText={this.state.email1Error}
                                            onChange={this.handleSignup}
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
                                            error={this.state.passwordError.length > 0}
                                            helperText={this.state.passwordError}
                                            onChange={this.handleSignup}
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
                                <br></br>
                                <MyButton type="submit" fullWidth>SIGN UP</MyButton>
                            </form>
                            <Box mt={5}>
                                <br></br>
                                <Copyright />
                            </Box>
                        </Container>
                    </div> : null}
                <div style={{ position: 'absolute', top: 60, right: 14 }}>
                    <Toast show={open} autohide delay={5000} onClose={this.closeToaster.bind(this)} closeButton>
                        <Toast.Header style={{ backgroundColor: '#ef5350' }}>
                            <Typography variant="body1" style={{ color: 'black' }}><ErrorOutlineIcon /> &nbsp; {toastHeader}</Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Toast.Header>
                        <Toast.Body> <Typography variant="body3" style={{ color: 'black' }}>{toastMessage}</Typography></Toast.Body>
                    </Toast>
                </div>
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
        authenticateUser: (email, password) => dispatch(authenticateUser(email, password)),
        onPageLoad: () => dispatch(onPageLoad())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);