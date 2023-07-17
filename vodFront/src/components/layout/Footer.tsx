import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        marginTop: 'auto',
        padding: '20px 0',
        backgroundColor: '#f5f5f5',
    },
});

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <Container maxWidth="sm">
                <Typography variant="body1" align="center">
                    © 2023 Video Lecture Site. All rights reserved.
                </Typography>
            </Container>
        </footer>
    );
}

export default Footer;
