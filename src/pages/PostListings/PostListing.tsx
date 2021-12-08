
import {Box, Container, FormControl, Grid, IconButton, MenuItem, Paper, Typography} from '@mui/material';
import React from "react";
import Post from "../../shared/Components/Post/Post";
import CancelIcon from '@mui/icons-material/Cancel';
import {red} from "@mui/material/colors";
import { useState, useEffect } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Axios from 'axios';

function PostListing (props:any) {
    const [busy, setBusy] = useState(true);
    const [posts, setPosts] = useState<any>([]);
    //const [data, setData] = useState<any>([]);
    const [categoryName, setCategoryName] = useState('');
    const CategoryID = props.match.params.CategoryID;
    const [sort, setSort] = useState('Recent');
    const [uid, setUid] = useState(2);

    const handleChange = (event: SelectChangeEvent) => {
        const val = event.target.value as string;
        setSort(val);
    };

   /* useEffect(() => {

        // Demo purposes

        if (!CategoryID) {
            // Axios.get(`http://localhost:3001/post/select/`)
            //     .then(res => {
            //         const data = res.data;
            //         setData(data)
            //         setCategoryName('Recent')
            //     })
        } else {
            console.log("categoryID", CategoryID);
            Axios.get(`http://localhost:3001/post-category/select/${CategoryID}/${sort}`)
            Axios.get(`http://localhost:3001/post-category/select/${CategoryID}`)
                .then(res => {
                    const data:any = res.data;
                    if (data.length > 0) {
                        setData(data)
                        setCategoryName(data[0].CategoryName)
                    }
                })
                .then(res => {
                    // setCategoryName(data[0].categoryName);
                })
        }

    }, []);*/

    const getPosts = async () => {
        Axios.get(`http://localhost:3001/post-category/select/${CategoryID}/${sort}`)
                .then(res => {
                    const data = res.data;
                        console.log('res.data', data);
                        setPosts(data)
                        //setCategoryName(data[0].CategoryName)
                })
                .then(res => {
                    // console.log('DATA', data);
                    // setCategoryName(data[0].categoryName);
                })
    };
    const getInterestsPosts = async () => {
        Axios.get(`http://localhost:3001/post-category/select/interests${uid}/${sort}`)
                .then(res => {
                    const data = res.data;
                        console.log('res.data', data);
                        setPosts(data)
                        //setData(data)
                        //setCategoryName(data[0].CategoryName)
                })
                .then(res => {
                    // console.log('DATA', data);
                    // setCategoryName(data[0].categoryName);
                })
    };


    useEffect(() => {
        setBusy(true);
        getPosts();
    }, [sort]);
    useEffect(() => {
        setBusy(false);
    }, [posts]);


    return (
        <Container sx={{display:'block'}}>
            

            <Container sx={{marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography variant='h5' color='text.primary' sx={{ textAlign: 'left'}}>
                    Sort By:
                    <FormControl sx={{m: 2, width: 90, mr:50, my:1}}>
                            <Select
                                value={sort}
                                onChange={handleChange}
                                variant={'standard'}
                            >
                                <MenuItem value={'Recent'}>Recent</MenuItem>
                                <MenuItem value={'Popular'}>Popular</MenuItem>
                                <MenuItem value={'Oldest'}>Oldest</MenuItem>
                            </Select>
                        </FormControl>
                       Show:
                       <FormControl sx={{m: 2, width: 90, mr:0, my:1}}>
                            <Select
                                value={sort}
                                onChange={handleChange}
                                variant={'standard'}
                            >
                                <MenuItem value={'Recent'}>Recent</MenuItem>
                                <MenuItem value={'Popular'}>Popular</MenuItem>
                                <MenuItem value={'Oldest'}>Oldest</MenuItem>
                            </Select>
                        </FormControl>
                </Typography>
                
        
                { !busy ? (posts.map((data: any, index: number) => {
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
                })) : null };
            </Container>
        </Container>
    )
}
export default PostListing;
