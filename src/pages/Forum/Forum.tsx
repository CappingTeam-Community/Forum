import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Button, Container, Grid, Paper, TextField, Typography} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import Post from '../../shared/Components/Post/Post';
import Comment from "../../shared/Components/Comment/Comment";
import Axios from "axios";
import {useEffect, useState} from "react";
import {IoCreateOutline} from "react-icons/all";
import {IconContext} from "react-icons";

function Forum (props:any) {
    const [busy, setBusy] = useState(true);
    const [sort, setSort] = useState('Recent')
    const [comment, setComment] = useState<any>({body:'', tag:''})
    const [post, setPost] = useState<any>([]);
    const [comments, setComments] = useState<any>([]);

    const PostID = props.match.params.PostID;

    const handleChange = (event: SelectChangeEvent) => {
        const val = event.target.value as string;
        setSort(val);
    };

    async function getPost() {
        await Axios.get(`http://localhost:3001/post/select/${PostID}`)
            .then(res => {
                const data = res.data;
                setPost(data);
            })
    };

    const getComments = async () => {
        Axios.get(`http://localhost:3001/post-comment/select/${PostID}/${sort}`)
            .then(res => {
                const data = res.data;
                setComments(data);
            })
    };

    function sendToDBComment (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        let date = new Date().toJSON().slice(0, 10);
            // TODO: Commenter ID should be current user
            // TODO: is this right?
            Axios.post(`http://localhost:3001/comment/insert`,{
                Comment: props.comment.comment,
                CommentDate: date,
                CommentTags: props.comment.tag,
                PostID_Comment: PostID,
                CommenterID: 17
    
            }).then(() =>{
                alert(comment)
            });
    }

    function handleComment (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();        
        const data = new FormData(event.currentTarget);
        const temp = {body:data.get('comment'), tag:data.get('tag')};
        setComment(temp);
    }

    useEffect(() => {
        setBusy(true);
        getPost().then(() => {});
    }, []);
    useEffect(() => {
        setBusy(true);
        getComments().then(() => {});
    }, [sort, post]);
    useEffect(() => {
        setBusy(false);
    }, [comments]);

        return (
            <>
                {!busy &&
                <Container sx={{marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center"}}>
                    {post.map((data: any) => {
                        return (
                            <Post id={data.PostID}
                                  author={data.UserName}
                                  title={data.PostTitle}
                                  date={data.PostDate}
                                  PostImage={data.PostImage}
                                  categories={[]}
                                  voteCount={data.PostVotes}
                                  postBody={data.PostBody}
                            />
                        )
                    })}
                    <Paper elevation={6} component='form' onSubmit={handleComment} sx={{ display: 'flex', boxShadow: '4', width:900, mt:1, py:.5}}>
                            <AccountCircle sx={{alignContent:'center', color: 'action.active', mx:1}}/>
                            <TextField
                                sx={{width: '80%'}}
                                name='comment'
                                label="Leave a comment..."
                                variant="filled"
                                size="small"
                                multiline
                                rows={4}

                            />
                            <Box sx={{flexDirection:'column', width:'20%'}}>
                                <TextField
                                    sx={{ ml:1, width: '90%',}}
                                    id="tag"
                                    name='tag'
                                    label="Tags"
                                    variant="filled"
                                    size="small"
                                />
                                <Box component='form' onSubmit={sendToDBComment}>
                                    <Button
                                        type='submit'
                                        sx={{m: 1, width: '90%', height: '40px'}}
                                        variant="contained"
                                    >
                                        <IconContext.Provider value={{ size: '25', color: "white"}}>
                                            <Box sx={{marginTop:.5}}>
                                                <IoCreateOutline/>
                                            </Box>
                                        </IconContext.Provider>
                                        <Typography sx={{ml:.5}}>Comment</Typography>
                                    </Button>
                                </Box>
                            </Box>
                        </Paper>
                    <Paper elevation={6} sx={{ display: 'flex', flexDirection:'column', boxShadow: '4', width:900, mt:1, backgroundColor:`rgba(255,255,255,.6)`}}>
                        <FormControl sx={{m: 0, width: 90, ml:2, my:1}}>
                            <Select
                                value={sort}
                                onChange={handleChange}
                                variant={'standard'}
                            >
                                <MenuItem value={'Recent'}>Recent</MenuItem>
                                <MenuItem value={'Popular'}>Popular</MenuItem>
                                <MenuItem value={'Oldest'}>Oldest</MenuItem>
                                <MenuItem value={'Tags'}>Tags</MenuItem>
                            </Select>
                        </FormControl>

                        {comments.map((data: any, index: number) => {
                            return (
                                <Grid alignItems="center" justifyContent="center" item md={10} key={index} sx={{pb: 3}}>
                                    <Comment id={data.CommentID}
                                             author={data.UserName}
                                             date={data.CommentDate}
                                             tags={data.CommentTags}
                                             voteCount={data.CommentVotes}
                                             commentBody={data.Comment}
                                    />
                                </Grid>
                            );
                        })}
                    </Paper>
                </Container>
                }
            </>
        )
}

export default Forum;