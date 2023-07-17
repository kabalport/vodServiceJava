import { Box, Typography, Link, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/REFA_LOGO.png';  // import the image
import SearchIcon from '@mui/icons-material/Search'; // Import the SearchIcon

const useStyles = makeStyles({
    dropdown: {
        position: 'relative',
        display: 'inline-block',
        marginRight: '24px', // Add right margin
    },
    dropdownContent: {
        display: 'none',
        position: 'absolute',
        minWidth: '160px',
        zIndex: 1,
        backgroundColor: '#ffffff', // change the background color to white
        padding: '12px 16px',
        borderRadius:  '10px', // change borderRadius to 10px
        fontWeight: 500,
        lineHeight: '30px',
        justifyContent: 'center',
    },
    'dropdownContent a': {
        display: 'block',
        width: '100%',
        padding: '5px 0',
        textDecoration: 'none',
        color: 'black', // set text color to black
    },
    'dropdownContentShow': {
        display: 'block',
    },
    'dropdownContent a:hover': {
        color: '#61dafb', // set hover color to blue
    },
    subMenu: {
        display: 'block',
        cursor: 'pointer',
        '&:hover': {
            color: '#61dafb', // set hover color to blue
        },
    },
});

const NavBar = () => {
    const navigate = useNavigate();

    const goToHome = () => navigate("/");

    const goToAbout = () => navigate("/about");
    const goToCareer = () => navigate("/career");
    const goToNotice = () => navigate("/notice");
    const goToJob = () => navigate("/job");
    const goToFaq = () => navigate("/faq");
    const goToQaa = () => navigate("/qaa");
    const goToLecture = () => navigate("/lectures");

    const classes = useStyles();
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);

    return (
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%">
            <Box display="flex" flexDirection="row" alignItems="center">
                <img src={Logo} alt="Logo" style={{marginLeft: '16px', cursor: 'pointer'}} onClick={goToHome} />
                <Typography style={{fontWeight: 700, fontSize: '19px', whiteSpace: "nowrap", marginLeft: '16px', letterSpacing: '-0.38px', lineHeight: '28px', cursor: 'pointer'}} onClick={goToHome}>
                    부동산융합아카데미
                </Typography>
            </Box>
            <Box display="flex" flexDirection="row">
                <Box
                    className={classes.dropdown}
                    onMouseEnter={() => setDropdownOpen1(true)}
                    onMouseLeave={() => setDropdownOpen1(false)}
                >
                    <Typography variant="h6" onClick={goToAbout} style={{cursor: 'pointer'}}>부동산융합아카데미</Typography>
                    <Box className={`${classes.dropdownContent} ${dropdownOpen1 ? classes.dropdownContentShow : ''}`}>
                        <Typography className={classes.subMenu} onClick={goToAbout}>부동산융합아카데미란</Typography>
                        <Typography className={classes.subMenu} onClick={goToCareer}>커리어맵</Typography>
                    </Box>
                </Box>
                <Box
                    className={classes.dropdown}
                    onMouseEnter={() => setDropdownOpen2(true)}
                    onMouseLeave={() => setDropdownOpen2(false)}
                >
                    <Typography variant="h6" onClick={goToNotice} style={{cursor: 'pointer'}}>커뮤니티</Typography>
                    <Box className={`${classes.dropdownContent} ${dropdownOpen2 ? classes.dropdownContentShow : ''}`}>
                        <Typography className={classes.subMenu} onClick={goToNotice}>공지사항</Typography>
                        <Typography className={classes.subMenu} onClick={goToJob}>구인구직</Typography>
                        <Typography className={classes.subMenu} onClick={goToFaq}>자주묻는질문</Typography>
                        <Typography className={classes.subMenu} onClick={goToQaa}>1:1문의</Typography>
                    </Box>
                </Box>
                <Typography variant="h6" onClick={goToLecture} style={{cursor: 'pointer', marginRight: '24px'}}>강의검색</Typography>
            </Box>
            <IconButton style={{ padding: 0 }} onClick={goToLecture}>
                <Box style={{ backgroundColor: '#0080fe', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SearchIcon style={{ color: '#FFFFFF', width: '30px', height: '30px' }} />
                </Box>
            </IconButton>
        </Box>
    );
}

export default NavBar;