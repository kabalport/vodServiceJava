// src/pages/QAARegisterPage.tsx

import React, { useState, FormEvent } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const QAARegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        // 이 곳에서 폼 데이터를 처리하거나 서버로 보낼 수 있습니다.
        console.log(name, email, message);
        window.location.href="/qaa"; // 문의 등록 후 문의 리스트 페이지로 이동
    };

    return (
        <Box p={4}>
            <Typography variant="h2" mb={2}>
                1:1 문의 등록
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="이름"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <TextField
                    label="이메일"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                    label="문의사항"
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">
                    보내기
                </Button>
            </form>
        </Box>
    );
}

export default QAARegisterPage;
