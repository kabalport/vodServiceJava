import React, {Fragment, useEffect, useState} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { getToken, getUserNm } from "../../authentication";
import { useScroll } from "../useScroll";
import { useScrollStore } from "../../store/ScrollStore";
import { useGlobalConfigStore } from "../../store/GlobalConfigStore";
import TopNavigationBar from "./TopNavigationBar";
import NavBar from "./NavBar";



const Header = () => {
    const { scrollY } = useScroll();
    const { scrollDirection, isContraction } = useScrollStore();
    const { isDesktop, device } = useGlobalConfigStore();

    const [isDesktop2, setIsDesktop2] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop2(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            // cleanup - remove the listener when the component unmounts
            window.removeEventListener('resize', handleResize);
        };
    }, []); // empty dependency array means this effect runs once on mount and cleanup on unmount

    const redirect = (url: any) => {
        window.location.href = url;
    };

    const openInNewTab = (url: any) => {
        window.open(url);
    };

    const LoginSection = () => (
        getToken() ? (
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
                    <NavLink to={`/signin`} state={{ nextUrl: window.location.href }}>로그인</NavLink>
                </li>
                <li>
                    <NavLink to={'/signup'} onClick={() => redirect(`${process.env.REACT_APP_DOMAIN}/signup`)}>회원가입</NavLink>
                </li>
            </Fragment>
        )
    );

    useEffect(() => {
        console.log(`isDesktop value has changed: ${isDesktop}`);
        // isDesktop 값이 변경될 때마다 수행하고자 하는 작업을 여기에 작성합니다.
        // 이곳에 작성된 코드는 isDesktop 값이 변할 때마다 실행됩니다.
    }, [isDesktop]);

    return (
        <HeaderStyle isUpper={false} mobileDevice={device === 'mobile'}
                     style={{ zIndex: !isDesktop && scrollDirection === 'down' ? 1 : 5 }}
        >
            <ToolbarContainer
                isDesktop2={isDesktop2}
                scrollY={scrollY}>
                <ul className="portal" style={{ backgroundColor: '#f5f5f5', padding: 0 }}>
                    {['a포털', 'b포털', 'c포털', 'd포털'].map(portal =>
                        <li key={portal}>
                            <NavLink to="#" onClick={() => redirect(`http://www.aica-gj.kr/main.php`)}>{portal}</NavLink>
                        </li>
                    )}
                    <li style={{backgroundColor: 'white'}}>
                        <NavLink to="#" onClick={() => redirect(`http://localhost:3000/refa`)}>메인사이트</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" onClick={() => openInNewTab(`http://www.aica-gj.kr/main.php`)}>추천사이트1</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" onClick={() => openInNewTab(`http://ai365.or.kr/`)}>추천사이트2</NavLink>
                    </li>
                </ul>
                <Box sx={{ display: 'flex', height: '100%', width: '100%', backgroundColor: '#f5f5f5' }} />
                <ul className="utility">
                    <LoginSection />
                </ul>
            </ToolbarContainer>
              <TopNavigationBar />

        </HeaderStyle>
    );
};


const ToolbarContainer = styled("div") <{
    isDesktop2: boolean,
    scrollY: number
}>`
  position: relative;
  display: flex;
  // display: ${window.innerWidth > 768 ? 'none' : 'flex'};
    display: ${props => props.isDesktop2 ? 'flex' : 'none'};

  

  height: 40px;
  //padding: 17px 40px;
  color: ${'rgb(0,0,0,0.7)'}
  background-color: ${'#f5f5f5'};
  align-items: center;
  z-index: 2;
  font-size: 14px;
  transition: 0.5s;

  .utility {
    position: absolute;
    right: 10px;
    display: flex;
    //flex: 1;
    justify-content: flex-end;
    height: 100%;
    align-items: center;

    > li {
      padding: 0 10px;
      height: 100%;
      display: flex;
      align-items: center;
    }

    > li a {
      font-family: NotoSansCJKKR;
      white-space: nowrap;
      font-size: 14px;
      // font-weight: normal;
      font-weight: bold;
      line-height: normal;
      letter-spacing: -0.56px;
      text-align: left;
      text-decoration: none; // 밑줄 제거
      color: ${'black'};

      &:focus-visible {
        outline: 2px solid ${'#000'};
      }
    }
    
    .userName{
      display: flex;
      align-items: center;

      b {
        margin-right: 2px;
        font-weight: 500;
      }
    }
  }
  
  

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
      
      
        &:hover {
        background-color: ${'#ffffff'};
        
        > a {
          color: ${'black'};
        }
      }
      
      
      > a {
        opacity: 0.6;
        font-family: NotoSansCJKKR;
        white-space: nowrap;
        font-size: 14px;
        font-weight: bold;
        // font-weight: normal;
        line-height: normal;
        letter-spacing: -0.56px;
        text-align: left;
        color: ${'black'};
        text-decoration: none; // 밑줄 제거

        &:focus-visible {
          outline: 2px solid ${'#000'};
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
        background-color: ${'#ffffff'};

        > a {
          color: ${'white'};
          opacity: 1;
        }
      }
     
    }
  }

  .sideon {
    display: flex;
    font-family: NotoSansCJKKR;
    white-space: nowrap;
    font-size: 14px;
    font-weight: normal;
    line-height: normal;
    letter-spacing: -0.56px;
    text-align: left;
    p {
      margin-right: 10px;
      opacity: 0.8;
    }

    em {
      font-style: normal;
      margin-right: 10px;

      //&.on {
      //  display: inline-block;
      //  width: 12px;
      //  height: 12px;
      //  background-color: #2DC11C;
      //  border-radius: 10px;
      //  margin-top: 3px;
      //}
    }
  }
`


const HeaderStyle = styled('header')<{ isUpper: boolean, mobileDevice: boolean }>`
  top: ${props => props.isUpper ? 0 : -40}px;
  transition: 0.3s;
  width: ${props => props.mobileDevice ? `${window.screen.width}px` : '100%'};
`

export default Header;
