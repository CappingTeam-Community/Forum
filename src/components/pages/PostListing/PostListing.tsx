import {Box, 
        Button, 
        Card, 
        Checkbox, 
        Container, 
        Grid, 
        IconButton, 
        Paper, 
        Typography,
        MenuItem,
        MenuList,
        InputLabel,
        FormControl,
        Select} from '@mui/material';
import React from "react";
import PostComponent from "../../shared/PostComponent/PostComponent";
import CancelIcon from '@mui/icons-material/Cancel';
import {red} from "@mui/material/colors";
import { useState, useEffect } from "react";

import Axios from 'axios';

interface State {
    data: any,
    categoryName: string
}

function PostListing (props:any) {
    const [data, setData] = useState<any>([]);
    const [categoryName, setCategoryName] = useState('');
    const CategoryID = props.match.params.CategoryID;
    var CurrentFilter = "default";


    function selectPopular(){
        window.location.reload();
        CurrentFilter = "Popular";
        console.log("popular selected")
        Axios.get(`http://localhost:3001/post-category/select/${CategoryID}/popular`)
                .then(res => {
                    const data = res.data;
                    console.log('postlisting.data', data);
                    setData(data)
                })
                .then(res => {
                    // console.log('DATA', data);
                    // setCategoryName(data[0].categoryName);
                })

    }

    function selectRecent(){
        CurrentFilter = "Recent";
        console.log("recent selected")
        Axios.get(`http://localhost:3001/post-category/select/${CategoryID}/recent`)
        .then(res => {
            console.log("CID", CategoryID);
            const data = res.data;
            console.log('postlisting.data', data);
            setData(data)
        })
        .then(res => {
            // console.log('DATA', data);
            // setCategoryName(data[0].categoryName);
        })
    }

    useEffect(() => {
        Axios.get(`http://localhost:3001/category/select/`)
        .then(res => {
            const data = res.data;
        })
    
        // Demo purposes

        if (CategoryID) {
            console.log("categoryID", CategoryID);
            Axios.get(`http://localhost:3001/post-category/select/${CategoryID}`)
                .then(res => {
                    console.log("CID", CategoryID);
                    const data = res.data;
                    console.log('postlisting.data', data);
                    setData(data)
                })
                .then(res => {
                    // console.log('DATA', data);
                    // setCategoryName(data[0].categoryName);
                })
        }

        else if (CurrentFilter = "Popular"){
            Axios.get(`http://localhost:3001/post-category/select/${CategoryID}/popular`)
                .then(res => {
                    console.log("CID", CategoryID);
                    const data = res.data;
                    console.log('postlisting.data', data);
                    setData(data)
                })
                .then(res => {
                    // console.log('DATA', data);
                    // setCategoryName(data[0].categoryName);
                })
        }

        else if (CurrentFilter = "Recent"){
            Axios.get(`http://localhost:3001/post-category/select/${CategoryID}/recent`)
                .then(res => {
                    console.log("CID", CategoryID);
                    const data = res.data;
                    console.log('postlisting.data', data);
                    setData(data)
                })
                .then(res => {
                    // console.log('DATA', data);
                    // setCategoryName(data[0].categoryName);
                })
        }

        else if (!CategoryID) {
            Axios.get(`http://localhost:3001/post/select/`)
                 .then(res => {
                     const data = res.data;
                     setData(data)
                     setCategoryName('Recent')
                 })
        }

    }, []);

    return (
        <Container sx={{display:'block'}}>
            <Box sx={{display:'flex', mt:1}}>
            <FormControl sx={{ width: 200 }}>
                        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Filter"
                        >
                            <MenuItem>Tags</MenuItem>
                            <MenuItem onClick={selectPopular}>Popular</MenuItem>
                            <MenuItem onClick={selectRecent}>Recent</MenuItem>

                            
                        </Select>
                    </FormControl>
                
            </Box>

            <Container sx={{marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center"}}>
                {data.map((data: any, index: number) => {
                    return (
                        <Grid item md={10} key={index} sx={{pb: 3}}>
                            <PostComponent id={data.PostID}
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
                })};
            </Container>
        </Container>
    )
}
export default PostListing;