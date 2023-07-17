// src/FAQPage.js

import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
    // 예제 FAQ 데이터입니다. 실제 데이터로 바꾸세요.
    const faqs = [
        {
            question: "질문 1",
            answer: "답변 1"
        },
        {
            question: "질문 2",
            answer: "답변 2"
        },
        {
            question: "질문 3",
            answer: "답변 3"
        }
    ];

    return (
        <Box p={4}>
            <Typography variant="h2" mb={2}>
                자주 묻는 질문
            </Typography>
            {faqs.map((faq, index) => (
                <Accordion key={index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {faq.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}

export default Faq;
