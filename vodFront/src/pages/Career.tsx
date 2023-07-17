// src/CareerPage.js

import React from 'react';
import { Box, Typography } from '@mui/material';

const CareerPage = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={4}>
            <Typography variant="h2" mb={2}>
                부동산융합아카데미 커리어맵
            </Typography>
            <Typography variant="body1" paragraph>
                부동산융합아카데미에서는 학생들이 공부한 이론을 실제 세계에서 적용할 수 있도록
                여러 가지 경로를 제공합니다. 이는 학생들이 성공적인 커리어를 구축하는 데 도움이 됩니다.
            </Typography>
            <Typography variant="body1" paragraph>
                학생들은 졸업 후 다음과 같은 다양한 경로를 선택할 수 있습니다:
            </Typography>
            <ul>
                <li>
                    <Typography variant="body1" paragraph>
                        부동산 개발 회사에서 분석가 또는 프로젝트 관리자로 일하기
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" paragraph>
                        부동산 투자 회사에서 투자 분석가로 일하기
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" paragraph>
                        부동산 에이전시에서 부동산 중개인 또는 에이전트로 일하기
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" paragraph>
                        독립적인 부동산 컨설턴트 또는 사업가로서 자신만의 비즈니스를 시작하기
                    </Typography>
                </li>
            </ul>
        </Box>
    );
}

export default CareerPage;
