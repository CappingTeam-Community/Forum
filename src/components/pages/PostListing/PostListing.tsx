import {Button, Checkbox, Container, Grid, Paper, Typography} from '@mui/material';
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";
import PostComponent from "../../shared/PostComponent/PostComponent";

function PostListing() {
    //Logic
    //TODO: TEST prop. correlate with database
    const prop1 = {
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
    const postArray: any = [prop1, prop1, prop1];

    return (
        <Container sx={{marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center"}}>
            {postArray.map((data: any, index: number) => {
                return (
                    <Grid item md={10} key={index} sx={{pb: 3}}>
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
        </Container>
    )
}
export default PostListing;