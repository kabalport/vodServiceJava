// src/JobPage.js

import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const JobPage = () => {
    // 예제 직무 데이터입니다. 실제 데이터로 바꾸세요.
    const jobs = [
        { title: "Software Developer", company: "Company A", location: "Seoul", salary: "$40,000 - $60,000" },
        { title: "Data Analyst", company: "Company B", location: "Busan", salary: "$30,000 - $50,000" },
        { title: "Product Manager", company: "Company C", location: "Daegu", salary: "$50,000 - $70,000" },
    ];

    return (
        <Box p={4}>
            <Typography variant="h2" mb={2}>
                구인구직
            </Typography>
            <List>
                {jobs.map((job, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={job.title}
                            secondary={`Company: ${job.company}, Location: ${job.location}, Salary: ${job.salary}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default JobPage;
