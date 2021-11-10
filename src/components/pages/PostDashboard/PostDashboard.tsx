import styles from './PostDashboard.module.css';
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button, FormControl, InputLabel, MenuItem, Paper, Select} from '@mui/material';
import {useEffect, useState} from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { useDropzone } from "react-dropzone";

function PostDashboard() {

    /*const Dropzone = ({ onDrop:any, accept:any }) => {
        // Initializing useDropzone hooks with options
        const { getRootProps, getInputProps, isDragActive } = useDropzone({
          onDrop,
          accept
        });*/

//document.write(today);
    function sendToDB() {
        let date = new Date().toJSON().slice(0, 10);
        //make appi call here
        Axios.post(`http://localhost:3001/post/insert`,{
            PostTitle: title,
            PostBody: content,
            CategoryID_Post: tag.CategoryID,
            PostDate: date,
            PostImage: image,
            CreatorID: 14

        }).then((res) => {
            console.log("res", res.data);
            alert("Inserted")
        });
    }

    useEffect(() => {
        Axios.get(`http://localhost:3001/category/select/`)
            .then(res => {
                const data = res.data;
                console.log("categoryData", data);
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
    const [allTags, setAllTags] = useState<any>([]);
    const [tag, setTag] = React.useState<any>(null);

    const tagChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        console.log('tag',event.target.value);
        setTag(event.target.value);
    };

    //image
    const [image, setImage] = React.useState('');

    const imageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.value);
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

            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: "center", justifyContent: "left", px: 8, m: 2 }}>
                <Paper sx={{ boxShadow: '4', backgroundColor: 'transparent' }} elevation={3}>
                <TextField
                        sx={{ m: 2, width: '50ch', backgroundColor: 'white' }}
                    id="image"
                    label="Image URL"
                    multiline
                    maxRows={3}
                    minRows={1}
                    value={image}
                    onChange={imageChange}
                    variant="filled"
                    />
                    </Paper>
            </Box>


            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: "center", justifyContent: "left", px: 8 }}>
                <Button
                    component={Link} to="/"
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
