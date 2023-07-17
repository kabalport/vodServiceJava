import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Tab, Tabs } from '@mui/material';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    barStyle: {
        minHeight: '40px',
        backgroundColor: '#f5f5f5',
        height: '40px',
        elevation: 0,
        boxShadow: 'none',
        borderBottom: 'none',
    },
});

interface HeaderProps {
    isLoggedIn: boolean;
    loginId: string;
}

const Header = () => {
    const classes = useStyles();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginId, setLoginId] = useState('');
    const location = useLocation();
    const tabPaths = ["/refa", "/tab1"];
    const tabLabels = ["부동산융합아카데미", "부동산지원포털"];
    const [value, setValue] = useState(location.pathname.startsWith("/refa") ? 0 : 1);

    useEffect(() => {
        setValue(location.pathname.startsWith("/refa") ? 0 : 1);
    }, [location]);

    useEffect(() => {
        // Check if isLoggedIn value is true in sessionStorage
        const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedIn);
        // Get loginId value from sessionStorage
        const storedLoginId = sessionStorage.getItem('loginId');
        setLoginId(storedLoginId || '');
    }, []);

    const handleLoginLogout = () => {
        // Toggle isLoggedIn value in sessionStorage
        sessionStorage.setItem('isLoggedIn', isLoggedIn ? 'false' : 'true');
        setIsLoggedIn(!isLoggedIn);
        // Remove loginId value from sessionStorage
        sessionStorage.removeItem('loginId');
        // Clear loginId state
        setLoginId('');
    };

    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                className={classes.barStyle}
                sx={{
                    minHeight: '40px',
                    backgroundColor: '#f5f5f5',
                    height: '40px',
                    elevation: 0,
                    boxShadow: 'none',
                    borderBottom: 'none',
                }}
            >
                <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">
                    <Tabs
                        value={value}
                        sx={{
                            '& .MuiTabs-indicator': {
                                display: 'none',
                                minHeight: '40px',
                                height: '40px',
                            },
                            minHeight: '40px',
                            height: '40px',
                        }}
                    >
                        {tabPaths.map((tab, index) => (
                            <Tab
                                style={{ color: value === index ? 'black' : 'grey' }}
                                key={index}
                                label={tabLabels[index]}
                                component={Link}
                                to={tab}
                                sx={{ backgroundColor: value === index ? 'white' : 'inherit', fontWeight: 'bold' }}
                            />
                        ))}
                    </Tabs>
                    <Box display="flex">
                        <Typography color={"black"} sx={{ padding: '10px' }}>
                            {isLoggedIn ? (
                                <div>
                                    <span>{loginId}</span>
                                    <Button
                                        style={{ backgroundColor: "yellow" }}
                                        onClick={handleLoginLogout}
                                    >
                                        Logout
                                    </Button>
                                </div>
                            ) : (
                                <Link
                                    to="/login"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        fontSize: '14px',
                                    }}
                                >
                                    로그인
                                </Link>
                            )}
                        </Typography>
                        <Typography color={"black"} sx={{ padding: '10px' }}>
                            <Link
                                to="/signup"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    fontSize: '14px',
                                    marginRight: '10px',
                                }}
                            >
                                회원가입
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </AppBar>
        </div>
    );
};

export default Header;
