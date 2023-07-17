import React, { useState } from "react";
import { Button, TextField, Grid, Typography } from "@material-ui/core";
import axios from 'axios';

const SignUpPage = () => {
    const [loginId, setLoginId] = useState('');
    const [pw, setPw] = useState('');
    const [userName, setUserName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [gender, setGender] = useState('');
    const [tel, setTel] = useState('');
    const [addr, setAddr] = useState('');
    const [email, setEmail] = useState('');

    const registerUser = async (user: any) => {
        const response = await axios.post('http://localhost:8080/api/members/join', user);
        return response.data;
    }

    const handleSubmit = async (e: React.FormEvent) => { // TypeScript에 맞게 이벤트 타입을 지정했습니다.
        e.preventDefault();

        const user = {
            loginId,
            pw,
            userName,
            birthdate,
            gender,
            tel,
            addr,
            email
        };

        try {
            const response = await registerUser(user);
            console.log(response); // check the server response
        } catch (error) {
            console.error('Failed to register user:', error);
        }


        if (pw !== pw) {
            alert("Passwords do not match");
        } else {
            // 회원 가입 로직 구현
        }
    };

    return (
        <Grid container direction="column" alignItems="center" justify="center" style={{ minHeight: "100vh" }}>
            <Typography variant="h3" component="h1">
                Sign Up
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: "300px", marginTop: "2rem" }}>
                <TextField
                    type="text"
                    label="Login ID"
                    fullWidth
                    margin="normal"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                />
                <TextField
                    type="password"
                    label="Password"
                    fullWidth
                    margin="normal"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                />
                <TextField
                    type="text"
                    label="User Name"
                    fullWidth
                    margin="normal"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                    type="date"
                    label="Birthdate"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                />
                <TextField
                    type="text"
                    label="Gender"
                    fullWidth
                    margin="normal"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />
                <TextField
                    type="tel"
                    label="Telephone"
                    fullWidth
                    margin="normal"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                />
                <TextField
                    type="text"
                    label="Address"
                    fullWidth
                    margin="normal"
                    value={addr}
                    onChange={(e) => setAddr(e.target.value)}
                />
                <TextField
                    type="email"
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" color="primary" variant="contained" fullWidth style={{ marginTop: "1rem" }}>
                    Sign Up
                </Button>
            </form>
        </Grid>
    );
};

export default SignUpPage;
