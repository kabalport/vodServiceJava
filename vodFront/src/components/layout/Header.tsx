import React, {useState, useEffect, Fragment} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Tab, Tabs } from '@mui/material';
import styled from '@emotion/styled';
import authentication, {AuthenticationType, getToken, getUserNm} from "../../authentication";

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

const rootPath = '';

const Header = () => {
    const classes = useStyles();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginId, setLoginId] = useState('');
    const location = useLocation();
    const tabPaths = ["/refa", "/tab1"];
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

    const ToolbarContainer = styled("div")<{

    }>`

      background-color: #f5f5f5;
      align-items: center;
      z-index: 2;
      font-size: 14px;
      transition: 0.5s;

      .portal {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;

        > li {
          display: flex;
          height: 100%;
          padding: 0 20px;
          align-items: center;
          background-color: rgb(0,0,0,0.7);
          > a {
            opacity: 0.6;
            font-family: NotoSansCJKKR;
            white-space: nowrap;
            font-size: 14px;
            font-weight: normal;
            line-height: normal;
            letter-spacing: -0.56px;
            text-align: left;

            &:focus-visible {
              outline: 2px solid white;
            }
          }
          &.subPortal{
            >a{
              opacity: 0.6;
              font-family: NotoSansCJKKR;
              white-space: nowrap;
              font-size: 10px;
              font-weight: normal;
              line-height: normal;
              letter-spacing: -0.56px;
              text-align: left;
            }
          }

          &.active {
            background-color: white};

            > a {
              color: white};
              opacity: 1;
            }
          }
    {}
    
    `

    return (
        <ToolbarContainer>

                <ul className="portal">
                    <li className={'active'}>
                        <NavLink to="#" onClick={() => {
                            const domain = process.env.REACT_APP_DOMAIN
                            window.location.href = `${domain}`
                        }}>사용자지원포털</NavLink>
                    </li>
                    <li className={'active'}>
                        <NavLink to="#" onClick={() => {
                            const domain = process.env.REACT_APP_DOMAIN
                            window.location.href = `${domain}/tsp`
                        }}>실증지원포털</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" onClick={() => {
                            if (!!!authentication.getToken()) {
                                window.location.href = `${process.env.REACT_APP_DOMAIN}/dxp`
                            }else {
                                window.location.href = `${process.env.REACT_APP_DXP_URL}`
                            }
                        }}>데이터유통포털</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" onClick={() => {
                            if (!!!authentication.getToken()) {
                                window.location.href = `${process.env.REACT_APP_DOMAIN}/saz`
                            }else {
                                window.location.href = `${process.env.REACT_APP_SAZ_URL}`
                            }
                        }}>안심구역포털</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" onClick={() => {
                            if (!!!authentication.getToken()) {
                                window.location.href = `${process.env.REACT_APP_DOMAIN}/lms`
                            }else {
                                window.location.href = `${process.env.REACT_APP_LMS_URL}`
                            }
                        }}>AI 융합 아카데미</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" onClick={() => {
                            window.open(`http://www.aica-gj.kr/main.php`)
                        }}>사업단 홈페이지</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" onClick={() => {
                            window.open(`http://ai365.or.kr/`)
                        }}>AI기업협력센터</NavLink>
                    </li>
                </ul>
                <Box sx={{display: 'flex', height: '100%', width: '100%', backgroundColor: '#f5f5f5'}}/>
                <ul className="utility">
                    {getToken()? (
                        <Fragment>
                            <li>
                                {/*<NavLink to={'/tsp'} className={'userName'}>*/}
                                <b>{getUserNm()}</b>
                                <span>님, 안녕하세요</span>
                                {/*</NavLink>*/}
                            </li>
                            <li>
                                <NavLink to={'signout'}>로그아웃</NavLink>
                            </li>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <li>
                                {/*{*/}
                                {/*  isTspPortal? <a href={`http://125.6.37.87/signin?nextUrl=${window.btoa(window.location.href)}`}>로그인</a>*/}
                                {/*    : <NavLink to={`${rootPath}/signin`}>로그인</NavLink>*/}
                                {/*}*/}
                                {/*<a href={`http://125.6.37.87/signin?nextUrl=${window.btoa(window.location.href)}`}>로그인</a>*/}
                                <NavLink to={`${rootPath}/signin`} state={{nextUrl: window.location.href}}>로그인</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/signup'} onClick={() => {

                                        window.location.href = `${process.env.REACT_APP_DOMAIN}/signup`

                                }}>회원가입</NavLink>
                            </li>
                        </Fragment>
                    )}
                </ul>

        </ToolbarContainer>
    );
};



export default Header;
