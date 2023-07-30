import {
    Box,
    Typography,
    IconButton,
    Drawer,
    ListItemText,
    ListItemIcon,
    ListItem,
    List,
    Stack, Button
} from '@mui/material';
import { keyframes } from '@emotion/react';

import { makeStyles } from '@mui/styles';
import React, {useEffect, useState, Fragment} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import Logo from '../../assets/REFA_LOGO.png';
import SearchIcon from '@mui/icons-material/Search';
import {useScroll} from "../useScroll";
import {useScrollStore} from "../../store/ScrollStore";
import {useGlobalConfigStore} from "../../store/GlobalConfigStore";
import MenuIcon from '@mui/icons-material/Menu';
import {Icons} from "../IconContainer"

interface NavigationProps {
    goToHome: () => void;
    goToSearch: () => void;
}

interface DropdownProps {
    menuItems: string[];
    title: string;
}


const menuAni = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -10px);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

const menuBounce = keyframes`
  0% {
    opacity: 0;
    top: 20px;
  }
  50% {
    top: -5px;
  }
  70% {
    opacity: 1;
    top: 10px;
  }
  100% {
    top: 0;
  }
`;








const useStyles = makeStyles({
    menu: {
        display: 'flex',
        flexShrink: 0,
        width: '100%',
        justifyContent: 'center',
        '& li': {
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'left',
            margin: '0 12px',
            '& .MuiButton-root': {
                padding: '10px 7px',
                fontSize: '18px',
                fontFamily: 'Noto Sans CJK KR',
                whiteSpace: 'nowrap',
                fontWeight: 500,
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: 'normal',
                letterSpacing: '-0.36px',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                textAlign: 'center',
                boxShadow: 'none',
                '& > span': {
                    // color: (props) => props.isOpacity ? '#fff' : '#000000',
                    color: '#000000',
                    '&:hover': {
                        color: '#4063ec',
                        // color: (props) => props.isOpacity ? '#fff' : '#4063ec',
                    },
                },
            },
            '& .active:not(:hover)': {
                '& > span': {
                    color: '#4063ec',
                    '&:after': {
                        content: '""',
                        width: '5px',
                        height: '5px',
                        display: 'block',
                        backgroundColor: '#4063ec',
                        borderRadius: '5px',
                        position: 'absolute',
                        top: '0',
                        left: '50%',
                        marginLeft: '-2px',
                    },
                },
            },
            '& > ul': {
                display: 'none',
                '& li': {
                    flexDirection: 'column',
                    textAlign: 'center',
                    fontWeight: 400,
                },
            },
            '&:hover': {
                '& .MuiButton-root': {
                    color: '#4063ec',
                    '&:after': {
                        content: '""',
                        width: '5px',
                        height: '5px',
                        display: 'block',
                        // backgroundColor: (props) => props.isOpacity ? '#fff' : '#4063ec',
                        backgroundColor: '#4063ec',
                        borderRadius: '5px',
                        position: 'absolute',
                        top: '-2px',
                        left: '50%',
                        marginLeft: '-2px',
                        animation: `${menuBounce} 0.7s linear forwards`,
                    },
                },
                '& > ul': {
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute',
                    top: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#fff',
                    height: 'auto',
                    justifyContent: 'center',
                    minWidth: '160px',
                    borderRadius: '10px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.16)',
                    animation: `${menuAni} 0.5s`,
                    '& > li': {
                        lineHeight: 1.6,
                        margin: '5px',
                        flex: 'initial',
                        whiteSpace: 'nowrap',
                        '&:hover': {
                            color: '#4063ec',
                            textDecoration: 'underline',
                        },
                    },
                },
            },
        },
        '@media screen and (max-width: 1200px)': {
            display: 'none',
        },
    },


    sidemenu: {
        position: "absolute",
        display: "flex",
        flexShrink: 0,
        marginLeft: '30px',
        lineHeight: '100%',
        alignItems: "center"
    },

    loc_tit: {
        whiteSpace: 'nowrap',
        marginLeft: '16px',
        fontSize: '19px',
        verticalAlign: 'center',
        letterSpacing: '-0.38px',
        lineHeight: '28px',
    },
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

const PortalBlock = (props: {
    icon: JSX.Element;
    OnClick: () => void;
    label: string;
}) => {
    return (
        <>
        <Stack onClick={props.OnClick} spacing={1} style={{cursor: "pointer"}}>
            {props.icon}
            <span style={{whiteSpace: 'pre-line', textAlign: "center",fontSize: 13, letterSpacing: -0.52}}>
                {props.label}
            </span>
        </Stack>
        </>
    );
};

const MobileTopNavigationBar = ({ goToHome, goToSearch }: NavigationProps) => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleClose = () => {
        setDrawerOpen(false);
    };

    const handleOpen = () => {
        setDrawerOpen(true);
    };

    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
            >
                <IconButton onClick={handleOpen}>
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

            <Drawer
                open={drawerOpen}
                onClose={handleClose}
                anchor="left"
                PaperProps={{
                    style: {
                        width: '100%',
                        maxWidth: '100%',
                    },
                }}
                onClick={handleClose} // Drawer 클릭 시 닫히게 설정
            >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingY: '16px',
                        }}
                    >
                        <Box
                            sx={{position: 'absolute', left: '15px', cursor: "pointer"}}
                        >
                            <Icons.SideArrow/>
                        </Box>
                        <Stack alignItems={'center'} style={{cursor: "pointer"}} onClick={()=> window.location.href= "/refa"}>
                            <span style={{fontWeight: "bold"}}>{'부동산교육'}</span>
                        </Stack>
                    </Box>
                <Stack
                    direction={'row'}
                    padding={'24px 25px'}
                    justifyContent={'space-between'}
                >
                    <PortalBlock
                        icon={<Icons.USPPortal/>}
                        label={'부동산\n지원포털'}
                        OnClick={() => {
                            window.location.href = `https://www.naver.com`;
                        }}
                    />
                    <PortalBlock
                        icon={<Icons.TSPPortal/>}
                        label={'부동산\n지원포털'}
                        OnClick={() => {
                            window.location.href = `${process.env.REACT_APP_DOMAIN}/tsp`
                        }}
                    />
                    <PortalBlock
                        icon={<Icons.DXPPortal/>}
                        label={'부동산\n유통포털'}
                        OnClick={() => {
                            window.location.href = `${process.env.REACT_APP_DOMAIN}/dxp`
                        }}
                    />
                    <PortalBlock
                        icon={<Icons.SAZPortal/>}
                        label={'부동산\n지원포털'}
                        OnClick={() => {
                            window.location.href = `${process.env.REACT_APP_DOMAIN}/saz`
                        }}
                    />
                    <PortalBlock
                        icon={<Icons.LMSPortal/>}
                        label={'부동산\n아카데미'}
                        OnClick={() => {
                            window.location.href = `${process.env.REACT_APP_DOMAIN}/lms`
                        }}
                    />
                    <PortalBlock
                        icon={<Icons.OriginPortal/>}
                        label={'부동산\n홈페이지'}
                        OnClick={() => {
                            window.location.href = `http://www.aica-gj.kr/main.php`
                        }}
                    />
                </Stack>


                <List>
                    <ListItem
                        button
                        onClick={(event) => {
                            event.stopPropagation(); // ListItem 클릭 시 이벤트 버블링 중단
                            goToSearch();
                        }}
                        sx={{backgroundColor: "#f7f7f7", height: 40.5,borderColor: "#d9d9d9", borderWidth: "1px 0px 1px 0px", borderStyle: "solid", alignItems: "center", textAlign: "center"}}>
                        <span style={{fontSize: "15px", fontWeight: "bold"}}>부동산융합아카데미</span>
                    </ListItem>
                    <ListItem
                        button
                        onClick={(event) => {
                            event.stopPropagation(); // ListItem 클릭 시 이벤트 버블링 중단
                            goToSearch();
                        }}
                        sx={{backgroundColor: "white", height: 40.5, alignItems: "center"}}>
                        <span style={{fontSize: "15px", fontWeight: "bold"}}>부동산융합아카데미란?</span>
                    </ListItem>
                    <ListItem
                        button
                        onClick={(event) => {
                            event.stopPropagation(); // ListItem 클릭 시 이벤트 버블링 중단
                            goToSearch();
                        }}
                        sx={{backgroundColor: "white", height: 40.5, alignItems: "center"}}>
                        <span style={{fontSize: "15px", fontWeight: "bold"}}>커리어맵</span>
                    </ListItem>
                    <ListItem
                        button
                        onClick={(event) => {
                            event.stopPropagation(); // ListItem 클릭 시 이벤트 버블링 중단
                            goToSearch();
                        }}
                        sx={{backgroundColor: "#f7f7f7", height: 40.5,borderColor: "#d9d9d9", borderWidth: "1px 0px 1px 0px", borderStyle: "solid", alignItems: "center", textAlign: "center"}}>
                        <span style={{fontSize: "15px", fontWeight: "bold"}}>커뮤니티</span>
                    </ListItem>
                    <ListItem
                        button
                        onClick={(event) => {
                            event.stopPropagation(); // ListItem 클릭 시 이벤트 버블링 중단
                            goToSearch();
                        }}
                        sx={{backgroundColor: "white", height: 40.5, alignItems: "center"}}>
                        <span style={{fontSize: "15px", fontWeight: "bold"}}>공지사항</span>
                    </ListItem>
                    <ListItem
                        button
                        onClick={(event) => {
                            event.stopPropagation(); // ListItem 클릭 시 이벤트 버블링 중단
                            goToSearch();
                        }}
                        sx={{backgroundColor: "white", height: 40.5, alignItems: "center"}}>
                        <span style={{fontSize: "15px", fontWeight: "bold"}}>구인구직</span>
                    </ListItem>
                    <ListItem
                        button
                        onClick={(event) => {
                            event.stopPropagation(); // ListItem 클릭 시 이벤트 버블링 중단
                            goToSearch();
                        }}
                        sx={{backgroundColor: "white", height: 40.5, alignItems: "center"}}>
                        <span style={{fontSize: "15px", fontWeight: "bold"}}>자주묻는질문</span>
                    </ListItem>
                    <ListItem
                        button
                        onClick={(event) => {
                            event.stopPropagation(); // ListItem 클릭 시 이벤트 버블링 중단
                            goToSearch();
                        }}
                        sx={{backgroundColor: "white", height: 40.5, alignItems: "center"}}>
                        <span style={{fontSize: "15px", fontWeight: "bold"}}>1:1문의</span>
                    </ListItem>
                    <ListItem
                        button
                        onClick={(event) => {
                            event.stopPropagation(); // ListItem 클릭 시 이벤트 버블링 중단
                            goToSearch();
                        }}
                        sx={{backgroundColor: "#f7f7f7", height: 40.5,borderColor: "#d9d9d9", borderWidth: "1px 0px 1px 0px", borderStyle: "solid", alignItems: "center", textAlign: "center"}}>
                        <span style={{fontSize: "15px", fontWeight: "bold"}}>강의검색</span>
                    </ListItem>
                    {/* Other List Items... */}
                </List>

                <div style={{marginTop: '20px'}}/>
                <Stack
                    direction={'row'}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    sx={{
                        marginX: '15px',
                        paddingX: '24px',
                        minHeight: '60px',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '10px',
                    }}
                >

                        {/*<Fragment>*/}
                        {/*    <Box>*/}
                        {/*        <Body4 weight={500}>{getUserNm()}</Body4>*/}
                        {/*        <Body4>{'님, 안녕하세요'}</Body4>*/}
                        {/*    </Box>*/}
                        {/*    <Box*/}
                        {/*        sx={{*/}
                        {/*            fontSize: '12px',*/}
                        {/*            color: Color.warm_gray,*/}
                        {/*            '&:hover': {*/}
                        {/*                textDecoration: 'underline',*/}
                        {/*            },*/}
                        {/*        }}*/}
                        {/*        component={'button'}*/}
                        {/*        onClick={()=>{navigate(`${isTspPortal? '/tsp' : '/signin'}/signout`)}}*/}
                        {/*    >*/}
                        {/*        {'로그아웃'}*/}
                        {/*    </Box>*/}
                        {/*</Fragment>*/}


                        <Fragment>
                            <NavLink style={{textDecoration: "none"}} to={``} onClick={() => {
                                window.location.href = `/login`
                            }}>
                                <span style={{whiteSpace: 'pre-line', textAlign: "center",fontSize: 14, letterSpacing: -0.52, color: "black", textDecoration: "none", fontWeight: "bold"}}>로그인</span>
                            </NavLink>
                            <Box sx={{borderLeft: `1px solid #ccc`, height: '14px'}}/>
                            <NavLink style={{textDecoration: "none"}} to={``} onClick={() => {
                                    window.location.href = `/signup`
                            }}>
                                <span style={{whiteSpace: 'pre-line', textAlign: "center",fontSize: 14, letterSpacing: -0.52, color: "black", textDecoration: "none", fontWeight: "bold"}}>회원가입</span>
                            </NavLink>
                        </Fragment>

                </Stack>
            </Drawer>

        </>
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


    const menuItems = [
        {
            label: '메뉴1',
            path: '/menu1',
            readYn: true,
            children: [
                {
                    label: '서브메뉴1',
                    path: '/submenu1',
                    readYn: true,
                    children: [{ label: '하위메뉴1', path: '/subsubmenu1', readYn: true }],
                },
            ],
        },
        // 추가 메뉴 아이템
    ];

    let activeLabel = '';
    if (menuItems && menuItems.length > 0) {
        activeLabel = menuItems[0].label;
    }



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
        <Box>
            {isDesktop? (
                <Box className={classes.menu}>
                <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                    <Box display="flex" alignItems="center">
                        <img src={Logo} alt="Logo" style={{marginLeft: '16px', cursor: 'pointer'}} onClick={() => goTo("/refa")} />
                        {/*<h1><span className={"loc_tit"}>부동산아카데미</span></h1>*/}
                        <Typography style={{fontWeight: 700, fontSize: '19px', whiteSpace: "nowrap", marginLeft: '16px', letterSpacing: '-0.38px', lineHeight: '28px', cursor: 'pointer'}} onClick={() => goTo("/refa")}>
                            부동산융합아카데미
                        </Typography>
                    </Box>

                    <Box>
                        {menuItems.filter(f => f.readYn).map((m, i) => {
                            const active = activeLabel == m.label;
                            return (
                                <li key={i}>
                                    <Button type="button" className={active ? 'active' : ''} onClick={() => goTo(m.path)}>
                                        <span style={{fontSize: 18}}>{m.label}</span>
                                    </Button>
                                    <ul>
                                        {(m.children || []).filter(f => f.readYn && f.label !== '사업신청').map((depth2, j) => (
                                            <li key={j}>
                                                <NavLink to={depth2.path}>
                                                    {depth2.label}
                                                </NavLink>
                                                {(depth2.children || []).map((depth3, k) => (
                                                    <NavLink key={k} to={depth3.path}>
                                                        {depth3.label}
                                                    </NavLink>
                                                ))}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            );
                        })}
                    </Box>


                    {/*<Box display="flex">*/}
                    {/*    <Dropdown menuItems={["부동산융합아카데미란", "커리어맵"]} title="부동산융합아카데미" />*/}
                    {/*    <Dropdown menuItems={["공지사항", "구인구직", "자주묻는질문", "1:1문의"]} title="커뮤니티" />*/}
                    {/*    <Typography variant="h6" onClick={() => goTo("/lectures")} style={{cursor: 'pointer', marginRight: '24px'}}>강의검색</Typography>*/}
                    {/*</Box>*/}
                    <IconButton style={{ padding: 0 }} onClick={() => window.location.href = 'http://m.naver.com/'}>
                        <Box style={{ backgroundColor: '#0080fe', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <SearchIcon style={{ color: '#FFFFFF', width: '40px', height: '40px' }} />
                        </Box>
                    </IconButton>
                </Box>
                </Box>
            ):(
                <MobileTopNavigationBar goToHome={() => goTo("/refa")} goToSearch={() => window.location.href = 'http://m.naver.com/'} />
            )}
        </Box>

    );
}

export default TopNavigationBar;
