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
import { NavLink } from 'react-router-dom';

interface State {
    comment: {
        comment: any
        tag: any

    },
    age: any,
    postData: any,
    commentData: any,
    newComment: any
}

class ForumPagePopular extends React.Component<{}, State> {
    static i = 0;
    private PostID: number;
    constructor(props: any) {
        super(props);

        this.state = {
            comment: {
                comment: '',
                tag: ''
            },
            age: '',
            postData: [],
            commentData: [],
            newComment: ''

        }
        this.PostID = props.match.params.PostID;

        this.handleChange = this.handleChange.bind(this);
        this.sendToDBComment = this.sendToDBComment.bind(this);
        this.getData = this.getData.bind(this);

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
        await Axios.get(`http://localhost:3001/post-comment/select/${this.PostID}/popular`)
            .then(res => {
                const data = res.data;
                this.setState({ commentData: data });
            })
            console.log("ran commentsPopular")
    }

    /*async getCommentsPopular() {
        window.location.reload();
        await Axios.get(`http://localhost:3001/post-comment/select/${this.PostID}/popular`)
            .then(res => {
                const data = res.data;
                this.setState({ commentData: data });
            })
            console.log("ran commentsPopular")
            this.runPopular()
    }*/


    private sendToDBComment (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        let date = new Date().toJSON().slice(0, 10);
            //make appi call here
            Axios.post(`http://localhost:3001/comment/insert`,{
                Comment: this.state.comment.comment,
                CommentDate: date,
                CommentTags: this.state.comment.tag,
                PostID_Comment: this.PostID,
                CommenterID: 17
    
            }).then(() =>{
                alert("Inserted")
            });
            console.log('clicked');
            console.log(this.state.comment.comment);
            console.log(date);
            console.log(this.PostID);
    }

    private getData (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();        
        const data = new FormData(event.currentTarget);        
        this.setState({
            comment: {
                comment: data.get('comment'),
                tag: data.get('tag')
            },
        });
        console.log("getData ran");
        console.log(this.state.comment.comment);
        console.log(this.state.comment.tag);
        console.log(this.PostID);
    }

    

    componentDidMount() {
            this.getPost()
            this.getComments()
        
    };

    runPopular() {

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

               
                <Box component='form' onSubmit={this.getData} sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField 
                        sx={{ m: 2, width: '55ch', }}
                        id="comment"
                        name='comment' 
                        label="Comment"
                        variant="standard"
                        size="small"
                        multiline
                        maxRows={10}
                        minRows={1} 
                        
                    />
                    <TextField 
                        sx={{ m: 2, width: '15ch', }}
                        id="tag"
                        name='tag' 
                        label="Tag"
                        variant="standard"
                        size="small"
                    />
                    <Button 
                        type='submit'
                        sx={{ m: 1, width: '10ch', height: '40px', }}
                        variant="outlined"
                        onClick={() => this.sendToDBComment}
                        >
                        Confirm
                    </Button>
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
                            <MenuItem value={10}><NavLink exact to={`/forum/${this.PostID}`}>Recent</NavLink></MenuItem>
                            <MenuItem value={20}><NavLink exact to={`/forum/${this.PostID}/popular`}>Popular</NavLink></MenuItem>
                            <MenuItem value={30}><NavLink exact to={`/forum/${this.PostID}/oldest`}>Oldest</NavLink></MenuItem>
                            <MenuItem value={40}><NavLink exact to={`/forum/${this.PostID}/tags`}>Tags</NavLink></MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box component='form' onSubmit={this.sendToDBComment}>
                    <Button 
                        type='submit'
                        sx={{ m: 1, width: '20ch', height: '40px', }}
                        variant="outlined"
                        >
                        Post Comment
                    </Button>
                </Box>

                {this.state.commentData.map((data: any, index: number) => {
                    return (
                        <Grid item md={10} key={index} sx={{ pb: 3 }}>
                            <CommentComponent id={data.CommentID}
                                author={data.UserName}
                                date={data.CommentDate}
                                tags={data.CommentTags}
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

export default ForumPagePopular;