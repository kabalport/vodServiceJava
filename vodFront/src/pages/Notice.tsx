// src/NoticePage.js

import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const NoticePage = () => {
    // 예제 공지사항 리스트입니다. 실제 데이터로 바꾸세요.
    const notices = [
        { title: "공지사항 1", date: "2023-06-01" },
        { title: "공지사항 2", date: "2023-05-30" },
        { title: "공지사항 3", date: "2023-05-29" },
    ];

    return (
        <Box p={4}>
            <Typography variant="h2" mb={2}>
                공지사항
            </Typography>
            <List>
                {notices.map((notice, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={notice.title}
                            secondary={notice.date}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default NoticePage;
