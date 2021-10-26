import styles from './ForumPage.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, Container, Grid, InputAdornment, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import PostComponent from '../../shared/PostComponent/PostComponent';
import CommentComponent from "../../shared/CommentComponent/CommentComponent";

function ForumPage() {
    //Logic

    function sendToDBComment() {
        console.log("clieckd");
    }

    //New Comment
    const [newComment, setNewComment] = React.useState('');

    const newCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment(event.target.value);
    };

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };


    const post1 = {
        id: 1,
        authorData: {
            username: 'blynch'
        },
        title: 'Endgame Spoilers',
        category: ['Marvel', 'Movies'],
        voteCount: '35',
        date: new Date().toLocaleString(),
        postBody: 'Endgame spoiler test text iterated.Endgame spoiler test text iterated. Endgame spoiler test text iterated. Endgame spoiler test text iterated.',
    }
    const postArray: any = [post1];

    const comment1 = {
        id: 1,
        authorData: {
            username: 'zfred'
        },
        tags: ['Marvel', 'Movies'],
        voteCount: '4',
        date: new Date().toLocaleString(),
        commentBody: 'I agree, this is a great movie',
    }
    const commentArray: any = [comment1, comment1, comment1];

    //Template
    return (
        <Container sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
            {postArray.map((data: any, index: number) => {
                return (
                    <Grid item md={10} key={index} sx={{ pb: 3 }}>
                        <PostComponent id={data.id}
                            authorData={data.authorData}
                            title={data.title}
                            date={data.date}
                            categories={data.categories}
                            voteCount={data.voteCount}
                            postBody={data.postBody}
                        />
                    </Grid>
                );
            })}

            <Box sx={{ display: 'flex',}}>
                <AccountCircle sx={{ color: 'action.active', mr: 0.5, mt: 3 }} />
                <TextField
                    sx={{ m: 2, width: '70ch', }}
                    id="input-with-sx"
                    label="Comment"
                    variant="standard"
                    size="small"
                    multiline
                    maxRows={10}
                    minRows={1}
                    value={newComment}
                    onChange={newCommentChange}
                />

                <Button
                    sx = {{ m: 1, width: '20ch', height: '40px',  }}
                    variant="outlined"
                    onClick={sendToDBComment}
                    
                >
                    Post Comment
                </Button>

                </Box>
                <Box sx={{ display: 'flex', alignItems: 'left', }}>
                <FormControl sx={{ m: 2, minWidth: 90 }} >
                    <InputLabel id="demo-simple-select-label">SortBy</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="SortBy"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Recent</MenuItem>
                        <MenuItem value={20}>Popular</MenuItem>
                        <MenuItem value={30}>Oldest</MenuItem>
                    </Select>
                    </FormControl>
                    </Box>
           

            {commentArray.map((data: any, index: number) => {
                return (
                    <Grid item md={10} key={index} sx={{ pb: 3 }}>
                        <CommentComponent id={data.id}
                            authorData={data.authorData}
                            date={data.date}
                            tags={data.tags}
                            voteCount={data.voteCount}
                            commentBody={data.commentBody}
                        />
                    </Grid>
                );
            })}
        </Container>
    )};

export default ForumPage;