import {Box, Container, FormControl, Grid, MenuItem, Typography} from '@mui/material';
import React from "react";
import Post from "../../shared/Components/Post/Post";
import { useState, useEffect } from "react";
import Select from '@mui/material/Select';
import Axios from 'axios';
import {getCurrentUser, isAuth} from "../../shared/Authentication";

function PostListing (props:any) {
    const [busy, setBusy] = useState(true);
    const [posts, setPosts] = useState<any>([]);
    const [show, setShow] = useState<any>('all');
    const [sort, setSort] = useState<any>();
    const [uid, setUid] = useState();
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        setBusy(true);
        if (isAuth()) {
            setUid(getCurrentUser().UserID);
        }
        if (props.location.state) {
            console.log('setShow', props.location.state.CategoryID);
            setShow(props.location.state.CategoryID);
        }
        getCategories().then(() => {});

    },[]);
    useEffect(() => {
        setBusy(true)
        setSort('Recent');
    }, [categories]);
    useEffect(() => {
        setBusy(true);
        getPosts().then(() => {})
    }, [sort, show]);
    useEffect(() => {
        setBusy(false);
    }, [posts]);

    const getCategories = async () => {
        await Axios.get(`http://localhost:3001/category/select/`)
            .then(res => {
                const data = res.data;
                setCategories(data)
            })
    }

    const getPosts = async () => {
        if (show === 'all') {
            await Axios.get(`http://localhost:3001/post/select/${sort}`)
                .then(res => {
                    const data = res.data;
                    setPosts(data)
                })
        } else if (show === 'interests') {
            if (isAuth()) {
                Axios.get(`http://localhost:3001/post-category/select/interests/${uid}/${sort}`)
                    .then(res => {
                        const data = res.data;
                        setPosts(data)
                    })
            }
        } else {
            await Axios.get(`http://localhost:3001/post-category/select/${show}/${sort}`)
                .then(res => {
                    const data = res.data;
                    setPosts(data)
                })
        }
    };

    return (
        <Container sx={{display:'block'}}>
            {!busy ? (
                <Container sx={{marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Box sx={{mb:1, width:900}}>
                        <Box display={'flex'} sx={{float:'left', ml:2}}>
                            <Typography variant='h6' color='text.primary' sx={{ width:'50%'}}>Sort By</Typography>
                            <FormControl sx={{ml:.5, width:'12vw'}}>
                                <Select
                                    value={sort}
                                    onChange={event => setSort(event.target.value)}
                                    variant={'standard'}
                                >
                                    <MenuItem value={'Recent'}>Recent</MenuItem>
                                    <MenuItem value={'Popular'}>Popular</MenuItem>
                                    <MenuItem value={'Oldest'}>Oldest</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box display={'flex'} sx={{float:'right', mr:2}}>
                            <Typography variant='h6' color='text.primary' sx={{width:'50%'}}>Category</Typography>
                            <FormControl sx={{ml: .5, width:'12vw'}}>
                                <Select
                                    value={show}
                                    onChange={event => setShow(event.target.value)}
                                    variant={'standard'}
                                >
                                    <MenuItem value={'all'}>Show All</MenuItem>
                                    {isAuth() ? <MenuItem value={'interests'}>My Interests</MenuItem> : null}
                                    {categories.map((category:any, index: any) => {
                                        return <MenuItem key={index} value={category.CategoryID}>{category.CategoryName}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    {posts.map((data: any, index: number) => {
                        return (
                            <Grid item md={10} key={index} sx={{pb: 3}}>
                                <Post id={data.PostID}
                                      author={data.UserName}
                                      title={data.PostTitle}
                                      date={data.PostDate}
                                      PostImage={data.PostImage}
                                      categories={[]}
                                      voteCount={data.PostVotes}
                                      postBody={data.PostBody}
                                />
                            </Grid>
                        );
                    })}
                </Container>
            ) : null }
        </Container>
    )
}
export default PostListing;
