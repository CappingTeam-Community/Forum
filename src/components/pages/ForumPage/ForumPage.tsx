import styles from './ForumPage.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, Container, Grid, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import PostComponent from '../../shared/PostComponent/PostComponent';
import CommentComponent from "../../shared/CommentComponent/CommentComponent";
import Axios from "axios";

interface State {
    age: any,
    postData: any,
    commentData: any,
    newComment: any
}

function sendToDBComment() {
    console.log("clieckd");
}


class ForumPage extends React.Component<{}, State> {
    private PostID: number;




    constructor(props: any) {
        super(props);

        this.state = {
            age: '',
            postData: [],
            commentData: [],
            newComment: ''

        }
        this.PostID = props.match.params.PostID;

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (event: SelectChangeEvent) => {
        const val = event.target.value as string;
        this.setState({ age: val });
    };

    async getPost() {
        await Axios.get(`http://localhost:3001/post/select/${this.PostID}`)
            .then(res => {
                const data = res.data;
                console.log('GETPOSTDATA', data);
                this.setState({ postData: data });
            })
    }
    async getComments() {
        await Axios.get(`http://localhost:3001/post-comment/select/${this.PostID}`)
            .then(res => {
                const data = res.data;
                this.setState({ commentData: data });
            })
    }

    componentDidMount() {
        this.getPost()
        this.getComments()
    }

    //Template
    render() {
        return (
            <Container sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
                {this.state.postData.map((data: any) => {
                    return (
                        <PostComponent id={data.PostID}
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

                <Box sx={{ display: 'flex', }}>
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

                    />

                    <Button
                        sx={{ m: 1, width: '20ch', height: '40px', }}
                        variant="outlined"
                        onClick={sendToDBComment}

                    >
                        Post Comment
                    </Button>

                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Comment" variant="standard" />
                    <Button variant="outlined">Post Comment</Button>
                    <FormControl sx={{ m: 0, minWidth: 90 }}>
                        <InputLabel id="demo-simple-select-label">SortBy</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.age}
                            label="SortBy"
                            onChange={this.handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Recent</MenuItem>
                            <MenuItem value={20}>Popular</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {this.state.commentData.map((data: any, index: number) => {
                    return (
                        <Grid item md={10} key={index} sx={{ pb: 3 }}>
                            <CommentComponent id={data.CommentID}
                                author={data.UserName}
                                date={data.CommentDate}
                                tags={[]}
                                voteCount={data.CommentVotes}
                                commentBody={data.Comment}
                            />
                        </Grid>
                    );
                })}
            </Container>
        )
    }
}

export default ForumPage;