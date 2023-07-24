import {Box, Typography, IconButton, Drawer} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/REFA_LOGO.png';
import SearchIcon from '@mui/icons-material/Search';
import {useScroll} from "../useScroll";
import {useScrollStore} from "../../store/ScrollStore";
import {useGlobalConfigStore} from "../../store/GlobalConfigStore";
import MenuIcon from '@mui/icons-material/Menu';

interface NavigationProps {
    goToHome: () => void;
    goToSearch: () => void;
}

interface DropdownProps {
    menuItems: string[];
    title: string;
}


const useStyles = makeStyles({
    dropdown: {
        position: 'relative',
        display: 'inline-block',
        marginRight: '24px',
    },
    dropdownContent: {
        display: 'none',
        position: 'absolute',
        minWidth: '160px',
        zIndex: 1,
        backgroundColor: '#ffffff',
        padding: '12px 16px',
        borderRadius:  '10px',
        fontWeight: 500,
        lineHeight: '30px',
        justifyContent: 'center',
    },
    dropdownContentShow: {
        display: 'block',
    },
    subMenu: {
        display: 'block',
        cursor: 'pointer',
        '&:hover': {
            color: '#61dafb',
        },
    },
});

const MobileTopNavigationBar = ({ goToHome, goToSearch }: NavigationProps) => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
        >
            <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
                <MenuIcon />
            </IconButton>
            <Box display="flex" alignItems="center">
                <img src={Logo} alt="Logo" style={{width: '100px', cursor: 'pointer'}} onClick={goToHome} />
                <Typography style={{fontWeight: 700, fontSize: '19px', whiteSpace: "nowrap", letterSpacing: '-0.38px', lineHeight: '28px', cursor: 'pointer'}}>부동산융합아카데미</Typography>
            </Box>
            <IconButton style={{ padding: 0 }} onClick={goToSearch}>
                <Box style={{ backgroundColor: '#0080fe', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SearchIcon style={{ color: '#FFFFFF', width: '40px', height: '40px' }} />
                </Box>
            </IconButton>
        </Box>
    );
}

const LeftDrawer = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <Drawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            sx={{
                overflow: 'auto',
                '.MuiBackdrop-root': {
                    top: '60px',
                },
            }}
        >
            // Drawer contents go here...
        </Drawer>
    )
}

const TopNavigationBar = () => {
    const navigate = useNavigate();
    const goTo = (path: string) => navigate(path);
    const classes = useStyles();
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const Dropdown = ({menuItems, title}: DropdownProps) => (
        <Box
            className={classes.dropdown}
            onMouseEnter={() => setDropdownOpen1(true)}
            onMouseLeave={() => setDropdownOpen1(false)}
        >
            <Typography variant="h6" onClick={() => goTo(`/${title}`)} style={{cursor: 'pointer'}}>{title}</Typography>
            <Box className={`${classes.dropdownContent} ${dropdownOpen1 ? classes.dropdownContentShow : ''}`}>
                {menuItems.map(item => <Typography className={classes.subMenu} onClick={() => goTo(`/${item}`)}>{item}</Typography>)}
            </Box>
        </Box>
    )

    return (
        <>
            {isDesktop? (
                <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                    <Box display="flex" alignItems="center">
                        <img src={Logo} alt="Logo" style={{marginLeft: '16px', cursor: 'pointer'}} onClick={() => goTo("/refa")} />
                        <Typography style={{fontWeight: 700, fontSize: '19px', whiteSpace: "nowrap", marginLeft: '16px', letterSpacing: '-0.38px', lineHeight: '28px', cursor: 'pointer'}} onClick={() => goTo("/refa")}>
                            부동산융합아카데미
                        </Typography>
                    </Box>
                    <Box display="flex">
                        <Dropdown menuItems={["부동산융합아카데미란", "커리어맵"]} title="부동산융합아카데미" />
                        <Dropdown menuItems={["공지사항", "구인구직", "자주묻는질문", "1:1문의"]} title="커뮤니티" />
                        <Typography variant="h6" onClick={() => goTo("/lectures")} style={{cursor: 'pointer', marginRight: '24px'}}>강의검색</Typography>
                    </Box>
                    <IconButton style={{ padding: 0 }} onClick={() => window.location.href = 'http://m.naver.com/'}>
                        <Box style={{ backgroundColor: '#0080fe', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <SearchIcon style={{ color: '#FFFFFF', width: '30px', height: '30px' }} />
                        </Box>
                    </IconButton>
                </Box>
            ):(
                <MobileTopNavigationBar goToHome={() => goTo("/refa")} goToSearch={() => window.location.href = 'http://m.naver.com/'} />
            )}
        </>
    );
}

export default TopNavigationBar;
