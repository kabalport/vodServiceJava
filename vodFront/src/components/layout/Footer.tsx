import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    Hidden,
    IconButton,
    InputLabel,
    Select,
    Stack,
    Typography,
} from '@mui/material';

import { useGlobalConfigStore } from '../../store/GlobalConfigStore';

import styled from '@emotion/styled';


import MenuItem from '@mui/material/MenuItem';
import {grey} from "@mui/material/colors";

const agencies = [
    { page: 'http://aica-gj.kr', nm: '사업단대표홈페이지' },
    { page: 'http://ai365.or.kr', nm: 'AI기업협력센터' },
    { page: 'http://www.gwangju.go.kr', nm: '광주광역시' },
    { page: 'http://nipa.kr', nm: '정보통신산업진흥원' },
    { page: 'http://msit.go.kr', nm: '과학기술정보통신부' },
];



function Footer() {
    // const location = useLocation();
    // const {data: routes = []} = useSWR('route://service');

    const {isDesktop} = useGlobalConfigStore();
    // const size = useResize()

    const isMobile = !isDesktop || window.innerWidth < 1280;

    const [relatedAgencies, setRelatedAgencies] = useState<string>('');

    return (
        <footer
            style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                background: '#fff',
                position: 'relative',
                zIndex: '1000',
                marginTop: 'auto'
            }}
        >
            <Stack
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                }}
            >

            </Stack>


            <Box
                style={{
                    borderRight: '1px solid rgb(204,204,204,0.5)',
                    height: '100%',
                }}
            />

            <Box
                padding={!isMobile ? '60px 0 80px 80px' : '40px 0 50px 15px'}
                flex={!isMobile ? '0 0 30%' : ''}
            >
                <img
                    alt={'footerLogo'}
                    src={`/REFA_LOGO.png`}
                    style={{width: '105px'}}
                />


                서울특별시 중랑구 ㅇㅇㅇㅇ로 111번길 11 1층


                <Stack direction={'row'} gap={'12px'}>

                    대표번호 TEL. 010-123-4567

                </Stack>
                <Stack direction={'row'} gap={'12px'}>

                    장애문의 TEL. 010-123-4567

                </Stack>


                ©2021 부동산산업융합사업단.ALL RIGHTS RESERVED

                {/*<VerticalInterval size={isMobile ? '20px' : '55px'}/>*/}

                <FormControl
                    fullWidth
                    sx={{ margin: isMobile ? '16px 0 20px' : '20px 0 16px' }}
                    className={'swiper-no-swiping'}
                >
                    <Select
                        displayEmpty
                        value={relatedAgencies}
                        MenuProps={{
                            anchorOrigin: { horizontal: 'left', vertical: 'top' },
                            transformOrigin: { horizontal: 'left', vertical: 'bottom' },
                        }}
                        sx={{
                            width: '240px',
                            height: '40px',
                            color: '#ccc',
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(64,99,236,0.1)',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(64,99,236,0.1)',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(64,99,236,0.1)',
                            },
                        }}
                        renderValue={(value) => {
                            const nm = agencies.find((f) => f.page === value)?.nm;
                            return (
                                <em style={{ fontSize: '13px', color: '#707070' }}>
                                    {nm ? nm : '유관기관 사이트'}
                                </em>
                            );
                        }}
                        onChange={(e) => {
                            setRelatedAgencies(e.target.value);
                            window.open(e.target.value);
                        }}
                    >
                        {agencies.map((m) => {
                            return (
                                <MenuItem
                                    sx={{
                                        fontSize: '13px',
                                        color: '#707070',
                                        lineHeight: '19px',
                                    }}
                                    value={m.page}
                                >
                                    {m.nm}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                <Stack flexDirection={'row'} gap={'8px'}>

                </Stack>
            </Box>


            {/*<img src={'/images/common/othergroup_01.png'}/>*/}
        </footer>

    );


    const LinkBox = styled(NavLink)`
  :focus-visible {
    outline: 3px solid #aaa;
  }
`;

    const SimpleMenu = (props: { isDesktop: boolean }) => {
        return (
            <Stack
                direction={props.isDesktop ? 'row' : 'column'}
                spacing={props.isDesktop ? '30px' : ''}
                mt={props.isDesktop ? '60px' : '30px'}
                style={{flexWrap: 'wrap'}}
            >
                <Stack direction={'row'} alignItems={'center'}>
                    <NavLink
                        to={''}
                        onClick={() => {
                            const domain = process.env.REACT_APP_DOMAIN;
                            window.location.href = `${domain}/information?preUrl=${window.btoa(
                                window.location.href
                            )}`;
                        }}
                    >

                        {'개인정보처리방침'}

                    </NavLink>
                    <Box
                        style={{
                            borderRight: props.isDesktop ? '0px' : `1px solid #cccccc`,
                            margin: props.isDesktop ? '0px' : '1px 16px 1px 16px',
                            marginRight: props.isDesktop ? '30px' : '16px',
                            height: props.isDesktop ? '0px' : '12px',
                        }}
                    ></Box>
                    <NavLink
                        to={''}
                        onClick={() => {
                            const domain = process.env.REACT_APP_DOMAIN;
                            window.location.href = `${domain}/TosContent?preUrl=${window.btoa(
                                window.location.href
                            )}`;
                        }}
                    >

                        {'이용약관'}

                    </NavLink>
                    <Box
                        style={{
                            borderRight: props.isDesktop ? '0px' : `1px solid #cccccc`,
                            margin: props.isDesktop ? '0px' : '1px 16px 1px 16px',
                            marginRight: props.isDesktop ? '30px' : '16px',
                            height: props.isDesktop ? '0px' : '12px',
                        }}
                    ></Box>
                    <NavLink
                        to={
                            `/SupportForUse/FrequentlyAskedQuestions`
                        }
                        replace
                    >

                        {'FAQ'}

                    </NavLink>
                    <Box
                        style={{
                            borderRight: props.isDesktop ? '0px' : `1px solid #cccccc`,
                            margin: props.isDesktop ? '0px' : '1px 16px 1px 16px',
                            marginRight: props.isDesktop ? '30px' : '16px',
                            height: props.isDesktop ? '0px' : '12px',
                        }}
                    ></Box>


                    <NavLink to={`/SupportForUse/UserManual`} replace>

                        {'사용자매뉴얼'}

                    </NavLink>

                    <Box
                        style={{
                            borderRight: props.isDesktop ? '0px' : `1px solid #cccccc`,
                            margin: props.isDesktop ? '0px' : '1px 16px 1px 16px',
                            marginRight: props.isDesktop ? '30px' : '16px',
                            height: props.isDesktop ? '0px' : '12px',
                        }}
                    ></Box>


                    <NavLink to={`/SupportForUse/ReferenceRoom`} replace>

                        {'자료실'}

                    </NavLink>

                </Stack>
            </Stack>
        );
    };

    const RelationPageLink = (props: { isDeskTop: boolean }) => {
        const [swiper, setSwiper] = useState<any | null>(null);
        const [stopBoolean, setStopBoolean] = useState<boolean>(true);
        const [stopClassName, setPalyClassName] = useState('');
        const [controllerName, setControllerName] = useState<string>('play');


        const handlePlay = (b: boolean) => {
            if (b) {
                swiper.autoplay.stop();
                setPalyClassName('is-stop');
                setControllerName('stop');
            } else {
                swiper.autoplay.start();
                setPalyClassName('');
                setControllerName('play');
            }
            console.log(stopBoolean);
        };


    };

    const SwiperControllerBtns = styled('div')<{ rootPath: string }>`
  display: flex;
  position: absolute;
  right: 29px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
  

  .ico {
    width: 24px;
    height: 24px;
    background: url('${(props) =>
        props.rootPath}/images/common/footer_stop.png')
      no-repeat center / contain;



    > span {
      position: absolute;
      width: 0;
      height: 0;
      line-height: 0;
      overflow: hidden;
      text-indent: -9999px;
    }
  }
`;

    const SwiperSlideItem = styled('a')<{ src: string }>`
  display: block;
  background-image: url(${(props) => props.src});
  width: 180px;
  height: 32px;
  text-indent: -9999px;
`;



}

export default Footer;
