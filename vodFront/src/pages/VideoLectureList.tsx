// VideoLectureList.tsx
import {Container, Typography, List, ListItem, ListItemText, Divider, TextField} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { Lecture, lectures } from './LectureData';  // Make sure this path is correct

const useStyles = makeStyles({
    root: {
        marginTop: '20px',
        marginBottom: '20px',
    },
});

const VideoLectureList = () => {
    const classes = useStyles();

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const searchResults = lectures.filter((lecture) =>
        lecture.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container className={classes.root}>
            <Typography variant="h4" gutterBottom>
                Video Lectures
            </Typography>
            <TextField
                label="Search for a lecture"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
            />

            <List>
                {searchResults.map((lecture) => (
                    <div key={lecture.id}>
                        <ListItem component={Link} to={`/lectures/${lecture.id}`}>
                            <ListItemText
                                primary={lecture.title}
                                secondary={`Instructor: ${lecture.instructor}`}
                            />
                        </ListItem>
                        <Divider />
                    </div>
                ))}
            </List>
        </Container>
    );
}

export default VideoLectureList;
