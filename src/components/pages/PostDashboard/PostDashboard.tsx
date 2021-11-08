import styles from './PostDashboard.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button, FormControl, InputLabel, MenuItem, Paper, Select} from '@mui/material';
import {useEffect, useState} from "react";
import Axios from "axios";

function PostDashboard() {
    const [allTags, setAllTags] = useState<any>([]);
    const [tag, setTag] = React.useState('');

    function sendToDB() {
        //make appi call here
        console.log('clicked');


    }
    useEffect(() => {
        Axios.get(`http://localhost:3001/category/select/`)
            .then(res => {
                const data = res.data;
                setAllTags(data);
            });
    },[]);

    //title
    const [title, setTitle] = React.useState('');

    const titleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    //content
    const [content, setContent] = React.useState('');

    const contentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };

    //tags
    const tagChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTag(event.target.value);
    };

    //Template
    return (
        <div className={styles.PostDashboard}>
            <h1> Create a new post</h1>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: "center", justifyContent: "left", px: 8, m: 2 }}>
                <Paper sx={{ boxShadow: '4', backgroundColor: 'transparent' }} elevation={3}>
                <TextField
                        sx={{ m: 2, width: '50ch', backgroundColor: 'white' }}
                    id="title"
                    label="Title"
                    multiline
                    maxRows={3}
                    minRows={1}
                    value={title}
                    onChange={titleChange}
                    variant="filled"
                    />
                    </Paper>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: "center", justifyContent: "left", px: 8, m: 2 }}>
                <Paper sx={{ boxShadow: '4', backgroundColor: 'transparent' }} elevation={3}>
                <TextField
                        sx={{ m: 2, width: '100ch', backgroundColor: 'white' }}

                    id="PostContent"
                    label="Post Content"
                    multiline
                    maxRows={25}
                    minRows={10}
                    value={content}
                    onChange={contentChange}
                    variant="filled"
                    />
                    </Paper>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: "center", justifyContent: "left", px: 8, m: 2 }}>
                <Paper sx={{ width: 200, boxShadow: '4', backgroundColor: 'transparent' }} elevation={3}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={tag}
                            label="Category"
                            onChange={tagChange}
                        >
                            {allTags.map((data:any,id:any)=>{
                                return <MenuItem value={data}>{data.CategoryName}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Paper>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: "center", justifyContent: "left", px: 8 }}>
                <Button
                    sx={{ m: 2, width: "15ch", justifyContent: "left" }}
                    onClick={sendToDB}
                    variant="contained"
                    color="success">
                    Post:
                    </Button>
            </Box>

        </div>
    )
};

export default PostDashboard;