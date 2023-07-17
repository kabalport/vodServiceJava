import {Box, Card, CardContent, CardMedia, Container, Grid, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import VideoPlayer from "../components/VideoPlayer";
import HomeText from "../components/Home/HomeText";
import MoreButton from "../components/Home/MoreButton";

const useStyles = makeStyles({
    root: {
        marginTop: '20px',
        marginBottom: '20px',
    },
});

const Home = () => {
    const classes = useStyles();
    const course= [
        { title: "인재양성팀 특별 교육 과정", subTitle: "모집기간 : 2022년 11월 30일 모집인원 9,999명 인재양성팀 특별 교육 과정에서는 인재양성을 위한 특별한 교육 과정을 제공합니다.", total: 5, agree: 2, startDate:"2022-11-23", endDate:"2022-11-30" },
        { title: "AI 모델링과 컴퓨터비전 기초", subTitle: "", total: 1, agree: 12, startDate:"2022-11-23", endDate:"2022-11-30" },
        { title: "준비중", subTitle: "", total: 5, agree: 2, startDate:'2022-11-23', endDate:'2022-11-30' },
    ];


    return (
        <div>
            <Box bgcolor="#1f2437" color="white" minHeight={'395px'} height={'485px'} display="flex" justifyContent="center" alignItems="center">
                <Box width={1260} padding={'90px 126px 75px'}>
                    <HomeText title={"부동산 특화 맞춤형 <br/>교육 코스"} subtitle={"부동산 융합 아카데미는 다양한 부동산 관련 교육을 제공합니다.<br/>로드맵을 확인하고, 강의를 검색해보세요!"}></HomeText>
                </Box>

            </Box>
            {/*<Box bgcolor="#0080ff" display="flex" justifyContent="center" alignItems="center" color="white" minHeight={'395px'} height={'825.38px'}>*/}
            {/*    <Box width={1260} padding={"0px 126px"} paddingTop={'80px'}>*/}
            {/*        <Box display="flex" justifyContent="space-between" alignItems="center">*/}

            {/*            <HomeText title={"부동산교육 전문 코스들을<br/>만나보세요."}></HomeText>*/}
            {/*            <MoreButton buttonText="과정 더보기" buttonColor="white" buttonBgColor="#1F2437" iconColor="yellow" />*/}
            {/*        </Box>*/}
            {/*        /!* courses mapping... *!/*/}
            {/*        <Grid container spacing={4}>*/}
            {/*            {course.map((course, index) => (*/}
            {/*                <Grid item xs={12} sm={6} md={4} key={index}>*/}
            {/*                    <Card style={{borderRadius: "20px 20px 20px 20px"}}>*/}
            {/*                        <CardMedia*/}
            {/*                            component="img"*/}
            {/*                            height="220px"*/}
            {/*                            image="https://images.unsplash.com/photo-1685029736462-5c091106a37c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80.jpg" // replace with the actual path to your image*/}
            {/*                            alt={course.title}*/}
            {/*                            style={{*/}
            {/*                                left: "0px",*/}
            {/*                                right: "3.33px",*/}
            {/*                                top: "0px",*/}
            {/*                                borderRadius: "20px 20px 0px 0px",*/}
            {/*                                background: "#D3D3D3",*/}
            {/*                            }}*/}
            {/*                        />*/}
            {/*                        <CardContent*/}
            {/*                            style={{*/}
            {/*                                left: "0px",*/}
            {/*                                height: "226px",*/}
            {/*                                right: "3.33px",*/}
            {/*                                top: "220px",*/}
            {/*                                borderRadius: "0px 0px 20px 20px",*/}
            {/*                                background: "#ffffff",*/}
            {/*                            }}*/}
            {/*                        >*/}

            {/*                            <Typography variant="h6">{course.title}</Typography>*/}
            {/*                            <Typography variant="body2">{course.subTitle}</Typography>*/}
            {/*                            <Typography variant="body2">총 {course.total} 강의</Typography>*/}
            {/*                            <Typography variant="body2">교육인정 {course.agree}시간</Typography>*/}
            {/*                            <Typography variant="body2">수강기간 {course.startDate} ~ {course.endDate}</Typography>*/}
            {/*                        </CardContent>*/}
            {/*                    </Card>*/}
            {/*                </Grid>*/}
            {/*            ))}*/}
            {/*        </Grid>*/}
            {/*    </Box>*/}
            {/*</Box>*/}
            <Box bgcolor="#f9f9f9" display="flex" justifyContent="center" alignItems="center" color="black" minHeight={'395px'} height={'825.38px'}>
                <Box width={1260} padding={'90px 126px 75px'}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h4">다양한 카테고리의 부동산교육 강의를 만나보세요.</Typography>
                        <MoreButton buttonText="강의 더보기" buttonColor="white" buttonBgColor="#1F2437" iconColor="yellow" />
                    </Box>
                    {/* other contents... */}
                </Box>
            </Box>
        </div>
        /*<Container className={classes.root}>
            <Typography variant="h4" gutterBottom>
                Welcome to Video Lecture Site!
            </Typography>
            <Typography variant="body1" paragraph>
                Our platform offers a variety of online lectures on different topics. Learn at your own pace from experts around the world.
            </Typography>
            <Typography variant="body1" paragraph>
                Browse our lecture library and start learning now!
            </Typography>

            <VideoPlayer url={"https://music.youtube.com/watch?v=Tc4fLM3tHwQ&feature=share"}/>
        </Container>*/
    );
}

export default Home;
