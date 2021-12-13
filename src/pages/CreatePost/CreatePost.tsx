import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Typography
} from '@mui/material';
import {useEffect, useState} from "react";
import Axios from "axios";
import {Redirect} from 'react-router-dom';

function CreatePost() {
    const [allTags, setAllTags] = useState<any>([]);
    const [tag, setTag] = React.useState<any>();
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    var [image, setImage] = React.useState('');
    const [redirect, setRedirect] = React.useState(false);

    function sendToDB() {
        let date = new Date().toJSON().slice(0, 10);
        if (image == "") {
            image = "https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg";
        }
        if(title.length > 0 && content.length > 0 && tag) {
            Axios.post(`http://localhost:3001/post/insert`,{
                PostTitle: title,
                PostBody: content,
                CategoryID_Post: tag.CategoryID,
                PostDate: date,
                PostImage: image,
                CreatorID: 1

            }).then((res) => {
                alert("Inserted")
            });
            setRedirect(true);
        } else {
            alert("Please fill in all data fields (Title, Content, Category)")
        }

    }

    useEffect(() => {
        Axios.get(`http://localhost:3001/category/select/`)
            .then(res => {
                const data = res.data;
                setAllTags(data);
            });
    },[]);

    //title

    const titleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const contentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };

    const tagChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTag(event.target.value);
    };
    const imageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.value);
    };
    const ComboBox = () => (
        <Paper sx={{ width: '50%', boxShadow: '4' }} elevation={3}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tag}
                    label="Category"
                    onChange={tagChange}
                >
                    {allTags.map((data:any)=>{
                        return <MenuItem value={data}>{data.CategoryName}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Paper>
    )
    return (
        <div style={{marginLeft:'25vw', marginTop:'5vh'}}>
            <Box sx={{display: 'block', justifyContent: "left",width:'50vw',m: 2}}>
                <Paper elevation={6} sx={{boxShadow: '4', backgroundColor: 'white', py:2, px: 4}}>
                    <Typography fontSize={25} color={"black"} sx={{textAlign: "center"}}>New Post</Typography>
                    <TextField
                            sx={{boxShadow: '2', my: 2, width: '100%', backgroundColor: 'white' }}
                        id="title"
                        label="Title"
                        multiline
                        maxRows={3}
                        minRows={1}
                        value={title}
                        onChange={titleChange}
                        variant="filled"
                        />
                    <TextField

                        sx={{ boxShadow: '2', my: 2, width: '100%', backgroundColor: 'white' }}
                        id="PostContent"
                        label="Post Content"
                        multiline
                        maxRows={25}
                        minRows={10}
                        value={content}
                        onChange={contentChange}
                        variant="filled"

                        />
                    <Box display={'flex'}>
                        <ComboBox />
                        <Paper sx={{ boxShadow: '4', backgroundColor: 'white' , ml:1, width:'60%'}} elevation={3}>
                            <TextField
                                id="image"
                                label="Image URL"
                                multiline
                                maxRows={3}
                                minRows={1}
                                value={image}
                                onChange={imageChange}
                                fullWidth
                            />
                        </Paper>
                    </Box>
                    <Box sx={{ mt:2, display: 'flex', flexWrap: 'wrap', justifyContent: "center"}}>
                    <Button
                        sx={{ mr: 2, width: "15ch", justifyContent: "center" }}
                        variant="contained"
                        color="primary">
                        Cancel
                    </Button>
                    <Button
                        sx={{ width: "15ch", justifyContent: "center" }}
                        onClick={sendToDB}
                        variant="contained"
                        color="inherit">
                        Create
                    </Button>
                </Box>
                </Paper>
                
            </Box>
            {redirect ? <Redirect to={{
                pathname: '/',
                state: {CategoryID: tag.CategoryID} }} />
                : null }
        </div>
    )
};

export default CreatePost;
