// VideoLectureDetail.tsx
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import {useParams} from "react-router";
import { Lecture, lectures } from './LectureData';  // Make sure this path is correct

const useStyles = makeStyles({
    root: {
        marginTop: '20px',
        marginBottom: '20px',
    },
});

const VideoLectureDetail = () => {
    const classes = useStyles();
    const { id } = useParams<{ id: string }>();
    const lecture = lectures.find((lecture: Lecture) => lecture.id === Number(id));

    return (
        <Container className={classes.root}>
            {lecture ? (
                <>
                    <Typography variant="h4">{lecture.title}</Typography>
                    <Typography variant="h6">{`Instructor: ${lecture.instructor}`}</Typography>
                    <Typography variant="body1">{lecture.description}</Typography>

                </>
            ) : (
                <Typography variant="h4">Lecture not found</Typography>
            )}
        </Container>
    );
}

export default VideoLectureDetail;
