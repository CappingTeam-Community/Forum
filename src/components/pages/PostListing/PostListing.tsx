import {Box, Button, Card, Checkbox, Container, Grid, IconButton, Paper, Typography} from '@mui/material';
import React from "react";
import PostComponent from "../../shared/PostComponent/PostComponent";
import CancelIcon from '@mui/icons-material/Cancel';
import {red} from "@mui/material/colors";

import Axios from 'axios';

interface State {
    data: any,
    categoryName: string
}

class PostListing extends React.Component<{}, State> {
    private CategoryID: number;
    private CategoryName: string;

    constructor(props:any) {
        super(props)
        this.state = {
            data: [],
            categoryName: ''
        }
        this.CategoryID = props.match.params.CategoryID;
        this.CategoryName = '';
    }

    componentDidMount() {

        // Demo purposes
        if (!this.CategoryID) {
            Axios.get(`http://localhost:3001/post/select/`)
                .then(res => {
                    const data = res.data;
                    this.setState({data:data})
                })
        } else {
            Axios.get(`http://localhost:3001/post-category/select/${this.CategoryID}`)
                .then(res => {
                    const data = res.data;
                    this.setState({data:data})
                })
                .then(res => {
                    this.setState({categoryName: this.state.data[0].CategoryName});
                })
        }

    }

    removeFilter() {

    }

    render() { return (
        <Container sx={{display:'block'}}>
            <Box sx={{display:'flex', mt:1}}>
                <Typography variant='h5' color='text.primary' sx={{ textAlign: 'left'}}>
                    Filters:
                </Typography>
                <Paper square elevation={3} sx={{ml:2, pl:1, height:30, width:'inherit', justifyContent:'center'}}>
                    <Box sx={{ display:'flex', m:'auto' }}>
                        <Typography noWrap variant='body2' color='text.primary' sx={{ m:'auto', textAlign: 'left'}}>
                            {this.state.categoryName}
                        </Typography>

                        <IconButton sx={{color:red[100]}} size='small' aria-label="cancel" onClick={this.removeFilter}>
                            <CancelIcon />
                        </IconButton>
                    </Box>
                </Paper>
            </Box>

            <Container sx={{marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center"}}>
                {this.state.data.map((data: any, index: number) => {
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
    )}
}
export default PostListing;