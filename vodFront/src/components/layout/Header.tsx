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
    listStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        listStyle: 'none',
    }
});


const Header = () => {
    const classes = useStyles();


    return (
        <>
            <Box sx={{display: 'flex', height: '100%', width: '100%', backgroundColor: '#f5f5f5'}}>
                <ul className={classes.listStyle}>
                    <li>
                        <NavLink to="#" onClick={() => {
                            window.location.href = `http://www.aica-gj.kr/main.php`
                        }}>사용자지원포털</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" onClick={() => {
                            window.location.href = `http://www.aica-gj.kr/main.php`
                        }}>실증지원포털</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" onClick={() => {
                            window.location.href = `http://www.aica-gj.kr/main.php`
                        }}>데이터유통포털</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" onClick={() => {
                            window.location.href = `http://www.aica-gj.kr/main.php`
                        }}>안심구역포털</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" onClick={() => {
                            window.location.href = `http://localhost:3000/refa`
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
                <ul className={classes.listStyle}>
                    {getToken()? (
                        <Fragment>
                            <li>
                                <b>{getUserNm()}</b>
                                <span>님, 안녕하세요</span>
                            </li>
                            <li>
                                <NavLink to={'signout'}>로그아웃</NavLink>
                            </li>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <li>
                                <NavLink to={`/signin`} state={{nextUrl: window.location.href}}>로그인</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/signup'} onClick={() => {
                                    window.location.href = `${process.env.REACT_APP_DOMAIN}/signup`
                                }}>회원가입</NavLink>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </Box>
        </>
    );
};

export default Header;
