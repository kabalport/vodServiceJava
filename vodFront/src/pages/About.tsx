// src/AboutPage.js

import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutPage = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={4}>
            <Typography variant="h2" mb={2}>
                부동산융합아카데미란?
            </Typography>
            <Typography variant="body1" paragraph>
                부동산융합아카데미는 미래 세대를 위한 진보적인 교육 플랫폼입니다.
                우리는 부동산와 관련된 가장 효과적인 교육 방법론을 제공하며,
                학생들이 미래의 경제에서 성공적으로 활동할 수 있도록 돕습니다.
            </Typography>
            <Typography variant="body1" paragraph>
                부동산융합아카데미에서는 학생들에게 AI를 이해하고 이를 사용하여 문제를 해결하는 능력을
                키울 수 있는 기회를 제공합니다.
                학생들은 최신 기술 동향을 이해하고 이를 이용하여 실제 생활에서의 문제를 해결하는데 필요한
                핵심적인 능력을 배울 수 있습니다.
            </Typography>
            <Typography variant="body1" paragraph>
                우리의 핵심 가치는 창의적 사고, 혁신, 그리고 연속적인 학습입니다.
                우리는 학생들이 이러한 가치를 실현하도록 돕는데 전념하고 있습니다.
            </Typography>
        </Box>
    );
}

export default AboutPage;
