import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import {Box, Button, FormControl, Hidden, IconButton, InputLabel, Select, Stack, Typography,} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import { Icons } from '../../components/IconContainer';
import styled from '@emotion/styled';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import MenuItem from '@mui/material/MenuItem';
interface SimpleMenuProps {
    isDesktop: boolean;
}

const SimpleMenu: React.FC<SimpleMenuProps> = ({ isDesktop }) => {
    return (
        <Stack
            direction={isDesktop ? 'row' : 'column'}
            spacing={isDesktop ? '30px' : ''}
            mt={isDesktop ? '60px' : '30px'}
            style={{ flexWrap: 'wrap' }}
        >
            <Stack direction={'row'} alignItems={'center'}>
                <NavLink
                    style={{color: "black", textDecorationLine: "none"}}
                    to={''}
                    onClick={() => {
                        const domain = process.env.REACT_APP_DOMAIN;
                        window.location.href = `${domain}/information?preUrl=${window.btoa(
                            window.location.href
                        )}`;
                    }}
                >
                    <span style={{fontSize: 14, letterSpacing: -0.56,  fontWeight: "bold"}}>
                        {'개인정보처리방침'}
                    </span>
                </NavLink>
                <Box
                    style={{
                        borderRight: isDesktop ? '0px' : `1px solid #cccccc`,
                        margin: isDesktop ? '0px' : '1px 16px 1px 16px',
                        marginRight: isDesktop ? '30px' : '16px',
                        height: isDesktop ? '0px' : '12px',
                    }}
                ></Box>
                <NavLink
                    style={{color: "black", textDecorationLine: "none"}}
                    to={''}
                    onClick={() => {
                        const domain = process.env.REACT_APP_DOMAIN;
                        window.location.href = `${domain}/TosContent?preUrl=${window.btoa(
                            window.location.href
                        )}`;
                    }}
                >
                        <span style={{color: '#707070', fontSize: 14, letterSpacing: -0.56,  fontWeight: "bold"}}>
                        {'이용약관'}
                        </span>
                </NavLink>
                <Box
                    style={{
                        borderRight: isDesktop ? '0px' : `1px solid #cccccc`,
                        margin: isDesktop ? '0px' : '1px 16px 1px 16px',
                        marginRight: isDesktop ? '30px' : '16px',
                        height: isDesktop ? '0px' : '12px',
                    }}
                ></Box>
                <NavLink
                    style={{color: "black", textDecorationLine: "none"}}
                    to={
                    `/SupportForUse/FrequentlyAskedQuestions`
                    }
                    replace
                >
                    <span style={{color: '#707070', fontSize: 14, letterSpacing: -0.56, fontWeight: "bold"}}>

                        {'FAQ'}

                    </span>
                </NavLink>
                <Box
                    style={{
                        borderRight: isDesktop ? '0px' : `1px solid #cccccc`,
                        margin: isDesktop ? '0px' : '1px 16px 1px 16px',
                        marginRight: isDesktop ? '30px' : '16px',
                        height: isDesktop ? '0px' : '12px',
                    }}
                ></Box>
                    <NavLink style={{color: "#707070", textDecorationLine: "none", fontWeight: "bold"}}
                        to={`/SupportForUse/UserManual`} replace>
                            <span style={{fontSize: 14, letterSpacing: -0.56}}>
                            {'사용자매뉴얼'}
                            </span>
                    </NavLink>
                <Box
                    style={{
                        borderRight: isDesktop ? '0px' : `1px solid #cccccc`,
                        margin: isDesktop ? '0px' : '1px 16px 1px 16px',
                        marginRight: isDesktop ? '30px' : '16px',
                        height: isDesktop ? '0px' : '12px',
                    }}
                ></Box>
                    <NavLink style={{color: "black", textDecorationLine: "none"}}
                        to={`/SupportForUse/ReferenceRoom`} replace>
                            <span style={{color: "#707070", fontWeight: "bold", fontSize: "14px"}} >
                            {'자료실'}
                                </span>
                    </NavLink>
            </Stack>
        </Stack>
    );
};
const agencies = [
    { page: 'http://aica-gj.kr', nm: '사업단대표홈페이지' },
    { page: 'http://ai365.or.kr', nm: 'AI기업협력센터' },
    { page: 'http://www.gwangju.go.kr', nm: '광주광역시' },
    { page: 'http://nipa.kr', nm: '정보통신산업진흥원' },
    { page: 'http://msit.go.kr', nm: '과학기술정보통신부' },
];

function Footer() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const isMobile = !isDesktop || window.innerWidth < 1280;
    const [relatedAgencies, setRelatedAgencies] = useState<any>('');

    const routes: RouteType[] = [
        {
            label: "부동산융합아카데미",
            readYn: true,
            path: "/about",
            children: [
                { path: "/about", label: "부동산융합아카데미란?", readYn: true },
                { path: "/career", label: "커리어맵", readYn: true },
            ],
        },
        {
            label: "커뮤니티",
            readYn: true,
            path: "/notice",
            children: [
                { path: "/notice", label: "공지사항", readYn: true },
                { path: "/job", label: "구인구직", readYn: true },
                { path: "/faq", label: "자주묻는질문", readYn: true },
                { path: "/qna", label: "1:1문의", readYn: true },
            ],
        },
        {
            label: "강의검색",
            readYn: true,
            path: "/lecture",
        },
    ];

    // RouteType 정의
    interface RouteType {
        label: string;
        readYn: boolean;
        path: string;
        children?: { path: string; label: string; readYn: boolean }[];
    }
    return (
        <footer
            style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                background: '#fff',
                position: 'relative',
                zIndex: '1000',
            }}
        >
            <Stack
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <RelationPageLink isDeskTop={!isMobile} />
                <Stack
                    flexDirection={'row'}
                    justifyContent={'flex-start'}
                    sx={{ maxWidth: '1260px', width: '100%' }}
                >
                    {!isMobile && (
                        <Stack
                            padding={'60px 0 80px'}
                            justifyContent={'space-between'}
                            flex={!isMobile ? '0 0 70%' : ''}
                        >
                            <Stack flexDirection={'row'}>
                                {!isMobile &&
                                    routes
                                        .filter((f) => f.readYn)
                                        .map((row: RouteType, i: number) => {
                                            return (
                                                <Box
                                                    key={i}
                                                    sx={{
                                                        width: '160px',
                                                        marginRight: '20px',
                                                        alignItems: 'left',
                                                    }}
                                                >
                                                    <span style={{fontSize: 14, letterSpacing: -0.56, lineHeight: 3 }}>
                                                         <LinkBox style={{color: "black", textDecorationLine: "none", fontWeight: "bold"}}
                                                             to={`${row.path}`}
                                                             replace
                                                         >
                                                    {row.label}
                                                         </LinkBox>
                                                    </span>

                                                    <Stack sx={{ display: 'flex', gap: '10px' }}>
                                                        {(row.children || [])
                                                            .filter((f) => f.readYn)
                                                            .map((child: RouteType, j: number) => {
                                                                return (
                                                                    <Box key={'children-' + j}>
                                                                        <LinkBox style={{color: "black", textDecorationLine: "none", lineHeight: 1 }}
                                                                            to={`${child.children}`}
                                                                            replace
                                                                        >
                                                                            <span style={{color: '#707070', fontSize: 14, letterSpacing: -0.56}}>
                                                                                {child.label}
                                                                            </span>
                                                                        </LinkBox>
                                                                    </Box>
                                                                );
                                                            })}
                                                    </Stack>
                                                </Box>
                                            );
                                        })}
                            </Stack>
                            <SimpleMenu isDesktop={isDesktop} />
                        </Stack>
                    )}
                    {!isMobile && (
                        <Box
                            style={{
                                borderRight: '1px solid rgb(204,204,204,0.5)',
                                height: '100%',
                            }}
                        />
                    )}
                    <Box
                        padding={!isMobile ? '60px 0 80px 80px' : '40px 0 50px 15px'}
                        flex={!isMobile ? '0 0 30%' : ''}
                    >
                        <img

                            alt={'footerLogo'}
                            src={`/images/REFA_LOGO.png`}
                            style={{ width: '105px' }}
                        />
                        {!isMobile || <SimpleMenu isDesktop={!isMobile} />}

                        <Stack direction={'row'} gap={'12px'}>
                        <span style={{color: '#707070', fontSize: 14, letterSpacing: -0.56, lineHeight: 2, fontWeight: "bold"}}>
                            주소
                        </span>
                        </Stack>

                        <Stack direction={'row'} gap={'12px'}>
                            <span style={{color: '#707070', fontSize: 14, letterSpacing: -0.56, lineHeight: 2, fontWeight: "bold"}}>
                                업무문의 TEL. 010-123-1234
                            </span>
                        </Stack>
                        <Stack direction={'row'} gap={'12px'}>

                                <span style={{color: '#707070', fontSize: 14, letterSpacing: -0.56, lineHeight: 2, fontWeight: "bold"}}>
                                장애문의 TEL. 010-123-1234
                                </span>

                        </Stack>

                        <span color={'#707070'} style={{ fontSize: '13px' }}>
                            <span>
                            ©2021 부동산융합사업.ALL RIGHTS RESERVED
                                </span>
                            </span>
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
                                    color: '#707070',
                                    '.MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#e0e0e0',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#e0e0e0',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#e0e0e0',
                                    },
                                }}
                                renderValue={(value) => {
                                    const nm = agencies.find((f) => f.page === value)?.nm;
                                    return (
                                        <span style={{ fontSize: '13px', color: '#707070' }}>
                                            {nm ? nm : '유관기관 사이트'}
                                        </span>
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
                            <CustomIconButton
                                icon={Icons.Facebook}
                                style={{ padding: 0 }}
                                onClick={() => {
                                    window.open(
                                        `https://www.facebook.com/aicongwangju/`,
                                        '_blank'
                                    );
                                }}
                            />
                            <CustomIconButton
                                icon={Icons.Instagram}
                                style={{ padding: 0 }}
                                onClick={() => {
                                    window.open(
                                        `https://www.instagram.com/aica_gwangju/`,
                                        '_blank'
                                    );
                                }}
                            />
                            <CustomIconButton
                                icon={Icons.Youtube}
                                style={{ padding: 0 }}
                                onClick={() => {
                                    window.open(
                                        `https://www.youtube.com/channel/UCC5t5AArvuZ7weH_a8VuFNg`,
                                        '_blank'
                                    );
                                }}
                            />
                        </Stack>
                    </Box>
                </Stack>
            </Stack>

            {/*<img src={'/images/common/othergroup_01.png'}/>*/}
        </footer>
    );
}
const LinkBox = styled(NavLink)`
  :focus-visible {
    outline: 3px solid #aaa;
  }
`;
const RelationPageLink = (props: { isDeskTop: boolean }) => {
    const [swiper, setSwiper] = useState<any | null>(null);
    const [stopBoolean, setStopBoolean] = useState<boolean>(true);
    const [stopClassName, setPalyClassName] = useState('');
    const [controllerName, setControllerName] = useState<string>('play');
    {/*  <SwiperSlideItem href="https://www.nipa.kr" target="_blank" src={`${rootPath}/images/common/othergroup_01.png`}/>*/}
    // 하드코딩된 배너 정보
    const swiperData: Partial<BannerInfo>[] = [
        {
            bannerId: '1',
            bannerNm: '배너1',
            targetUrl: 'https://www.nipa.kr',
            src: '/images/common/othergroup_01.png'
        },
        {
            bannerId: '2',
            bannerNm: '배너2',
            targetUrl: 'https://www.example2.com',
            src: '/images/common/othergroup_02.png'
        },
        {
            bannerId: '3',
            bannerNm: '배너3',
            targetUrl: 'https://www.example2.com',
            src: '/images/common/othergroup_03.png'
        },
        {
            bannerId: '4',
            bannerNm: '배너3',
            targetUrl: 'https://www.example2.com',
            src: '/images/common/othergroup_04.png'
        },
        {
            bannerId: '5',
            bannerNm: '배너3',
            targetUrl: 'https://www.example2.com',
            src: '/images/common/othergroup_05.png'
        },
        // 추가 배너 정보를 여기에 입력하세요.
    ];
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

    const rootPath = '';
    return (
        <Box
            sx={{
                borderBottom: '1px solid rgb(204,204,204,0.5)',
                borderTop: '1px solid rgb(204,204,204,0.5)',
                height: '80px',
                width: '100%',
            }}
        >
            {swiperData && swiperData.length > 0 && (
                <SwiperContent
                    loopFillGroupWithBlank={true}
                    loop
                    navigation
                    spaceBetween={60}
                    slidesPerView={'auto'}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                    }}
                    modules={[Navigation, Autoplay]}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    className={`${stopClassName}`}
                    style={{ height: '100%' }}
                >
                    {swiperData.map((m, i) => {
                        const type = 'PC';
                        const url = `${process.env.REACT_APP_DOMAIN_COMMON_BNET}/common/api/banners/${m.bannerId}/images/${type}`;
                        return (
                            <SwiperSlide>
                                <SwiperSlideItem
                                    href={m.targetUrl ? m.targetUrl : undefined}
                                    target="_blank"
                                    src={m.src}
                                >
                                    {m.bannerNm}
                                </SwiperSlideItem>
                            </SwiperSlide>
                        );
                    })}
                    <SwiperControllerBtns rootPath={rootPath}>
                        <Box
                            component={'button'}
                            type="button"
                            className="ico"
                            onClick={() => {
                                setStopBoolean(!stopBoolean);
                                handlePlay(stopBoolean);
                            }}
                        >
                            {/*<Typography component={'span'}>{controllerName}</Typography>*/}
                        </Box>
                    </SwiperControllerBtns>
                </SwiperContent>
            )}
        </Box>
    );
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

    .swiper.is-stop & {
      background-image: url('${(props) =>
    props.rootPath}/images/common/footer_player.png');
    }

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

const SwiperSlideItem = styled('a')<{ src: any }>`
  display: block;
  background-image: url(${(props) => props.src});
  width: 180px;
  height: 32px;
  text-indent: -9999px;
`;

const SwiperContent = styled(Swiper)`
  max-width: 1260px;
  margin: 0 auto;
  padding: 12px 50px;

  .swiper-slide {
    display: flex;
    width: 180px;
    align-items: center;
  }

  .swiper-button-prev {
    left: 0;
    background-color: #fff;
  }

  .swiper-button-prev:after {
    color: #999;
    font-size: 15px;
    padding-top: 0;
    font-weight: bold;
  }

  .swiper-button-next {
    right: 0;
    background-color: #fff;
  }

  .swiper-button-next:after {
    color: #999;
    font-size: 15px;
    padding-top: 0;
    font-weight: bold;
  }

  @media (min-width: 320px) and (max-width: 1280px) {
    .swiper-button-prev {
      left: auto;
      right: 50px;
      background-color: transparent;
    }

    .swiper-button-next {
      right: 10px;
      background-color: transparent;
    }

    &:after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 160px;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 55%
      );
      z-index: 1;
    }
  }
`;



interface BannerInfo {
    bannerId: string;
    bannerNm: string;
    systemId: string;
    beginDt: number;
    endDt: number;
    targetUrl: string;
    newWindow: boolean;
    pcImageFileId: string;
    src: string;
    mobileImageFileId: string;
    enabled: boolean;
    fmtEndDay: string;
    fmtBeginTm: string;
    fmtBeginDay: string;
    fmtEndTm: string;
    fmtBeginDt: string;
    fmtCreatedDt: string;
    fmtCreatedDay: string;
    fmtEndDt: string;
}

function setStopBoolean(arg0: boolean) {
    throw new Error('Function not implemented.');
}

const IconButtonStyle = styled(IconButton)`
  border-radius: 10px;
`
export const CustomIconButton: React.FC<{
    icon: () => React.ReactNode
    startText?: string
    endText?: string
    style?: React.CSSProperties;
    onClick?: () => void
}> = props => {
    return <IconButtonStyle
        onClick={props.onClick}
        style={props.style}
    >
        {props.startText}
        {props.icon()}
        {props.endText}
    </IconButtonStyle>
}

export default Footer;
