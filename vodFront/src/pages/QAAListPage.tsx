// src/pages/QAAListPage.tsx

import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const QAAListPage = () => {
    const [qaas, setQaas] = useState<{id: number, name: string, title: string, date: string}[]>([]);

    // 페이징이 필요하면 추가적인 상태를 이용하여 관리해야 합니다.
    // 서버에서 데이터를 가져오는 경우 useEffect를 이용하여
    // 첫 렌더링 시 데이터를 로드합니다.
    useEffect(() => {
        // 여기에서 서버에서 데이터를 로드하거나,
        // 임시로 하드 코딩된 데이터를 사용합니다.
        const tempQaas = [
            { id: 1, name: '홍길동', title: '문의사항이 있습니다.', date: '2023-06-01' },
            { id: 2, name: '이순신', title: '강의 문의드립니다.', date: '2023-06-02' },
        ];

        setQaas(tempQaas);
    }, []);

    return (
        <Box p={4}>
            <Typography variant="h2" mb={2}>
                1:1 문의
            </Typography>
            <List>
                {qaas.map(qaa => (
                    <ListItem key={qaa.id}>
                        <ListItemText
                            primary={qaa.title}
                            secondary={`작성자: ${qaa.name}, 날짜: ${qaa.date}`}
                        />
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" color="primary" onClick={() => { window.location.href="/qaaregister"; }}>
                문의하기
            </Button>
        </Box>
    );
}

export default QAAListPage;
