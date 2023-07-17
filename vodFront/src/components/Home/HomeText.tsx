import React from 'react';
import { Box, Typography } from '@mui/material';

interface HomePageIntroProps {
    title: string;
    subtitle?: string;
}

const HomeText: React.FC<HomePageIntroProps> = ({ title, subtitle }) => {
    return (
        <Box>

            <Typography style={{ fontWeight: 'bold', fontSize:54, lineHeight: 1.3, letterSpacing: '-2.16px'}}
                        dangerouslySetInnerHTML={{__html: title}}>
            </Typography>
            {subtitle && (
                <Typography fontSize={'20px'} gutterBottom
                            dangerouslySetInnerHTML={{__html: subtitle}}>
                </Typography>
            )}
        </Box>

    );
};

export default HomeText;