import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        height: '100vh',
    },
    paper: {
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: '1rem',
    },
    submit: {
        margin: '1rem 0',
    },
});

interface LoginRequest {
    loginId: string;
    pw: string;
}

const LoginPage = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const loginRequest: LoginRequest = {
            loginId: loginId,
            pw: password,
        };

        try {
            const response = await axios.post('http://localhost:8080/api/login', loginRequest);
            console.log(response.data); // check the server response

            // Example authentication logic with fake data
            if (response.data.loginId) {
                // If authentication is successful, store the login status in the session
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('loginId', response.data.loginId);

                // If rememberMe is checked, store the login status in the localStorage
                if (rememberMe) {
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('loginId', response.data.loginId);
                }

                // Navigate to the desired page
                navigate('/refa');
            } else {
                // If authentication fails, display an error message
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Failed to login:', error);
        }
    };

    return (
        <Grid container component="main" className={classes.root}>
            <Grid item xs={12} sm={8} md={5} component={Box} margin="auto">
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} onSubmit={handleLogin}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="loginId"
                            label="Login ID"
                            name="loginId"
                            autoComplete="username"
                            autoFocus
                            value={loginId}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginId(e.target.value)}
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
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                            checked={rememberMe}
                            onChange={(event, checked) => setRememberMe(checked)}
                        />

                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="/forgot-password" style={{ textDecoration: 'none' }}>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/signup" style={{ textDecoration: 'none' }}>
                                    {'Don\'t have an account? Sign Up'}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
};

export default LoginPage;
