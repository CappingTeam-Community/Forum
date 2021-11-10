import {Box, Button, Card, Checkbox, Container, Grid, IconButton, Paper, Typography} from '@mui/material';
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

    useEffect(() => {

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

    }, []);

    return (
        <Container sx={{display:'block'}}>
            <Box sx={{display:'flex', mt:1}}>
                <Typography variant='h5' color='text.primary' sx={{ textAlign: 'left'}}>
                    Filters:
                </Typography>
                <Paper square elevation={3} sx={{ml:2, pl:1, height:30, width:'inherit', justifyContent:'center'}}>
                    <Box sx={{ display:'flex', m:'auto' }}>
                        <Typography noWrap variant='body2' color='text.primary' sx={{ m:'auto', textAlign: 'left'}}>
                            {categoryName}
                        </Typography>

                        <IconButton sx={{color:red[100]}} size='small' aria-label="cancel">
                            <CancelIcon />
                        </IconButton>
                    </Box>
                </Paper>
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
