import styles from './PostDashboard.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


function PostDashboard() {
    //Logic

    function sendToDB() {
        //make appi call here
        console.log('clicked');


    }

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
    const [tags, setTags] = React.useState('');
    const tagsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTags(event.target.value);
    };

    //Template
    return (
        <div className={styles.PostDashboard}>
            <h1> Create a new post</h1>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: "center", justifyContent: "left", px: 10 }}>
                <TextField
                    sx={{ m: 2, width: '50ch', }}
                    id="title"
                    label="Title"
                    multiline
                    maxRows={3}
                    minRows={1}
                    value={title}
                    onChange={titleChange}
                    variant="filled"
                />
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: "center", justifyContent: "left", px: 10 }}>
                <TextField
                    sx={{ m: 2, width: '100ch', }}

                    id="PostContent"
                    label="Post Content"
                    multiline
                    maxRows={25}
                    minRows={10}
                    value={content}
                    onChange={contentChange}
                    variant="filled"
                />
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: "center", justifyContent: "left", px: 10 }}>
                <TextField
                    sx={{ m: 2, width: '50ch' }}
                    id="tags"
                    label="Tags"
                    size="small"
                    multiline
                    maxRows={2}
                    minRows={1}
                    value={tags}
                    onChange={tagsChange}
                    variant="filled"
                />
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: "center", justifyContent: "left", px: 10 }}>
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