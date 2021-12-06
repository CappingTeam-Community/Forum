import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
    Button,
    Dialog,
    DialogActions, DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Typography
} from '@mui/material';
import {RefObject, useEffect, useLayoutEffect, useState} from "react";
import Axios from "axios";
import {Redirect} from 'react-router-dom';

function CreatePost(props:any) {
    const [allTags, setAllTags] = useState<any>([]);
    const [tag, setTag] = React.useState<any>();
    const [dialog, setDialog] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    var [image, setImage] = React.useState('');
    const [redirect, setRedirect] = React.useState(false);
    const [string, setString] = React.useState('');

    function sendToDB() {
        let date = new Date().toJSON().slice(0, 10);
        if (image == "") {
            image = "https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg";
          } 
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
        setString("/category/" + tag.CategoryID.toString());
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

    const titleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const contentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };

    const tagChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTag(event.target.value);
    };
    const handleDialog = () => {
        setDialog(!dialog);
    }
    const handleSubmitDialog = () => {
        // Save media to database
        handleDialog();
    }
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
                    {allTags.map((data:any,id:any)=>{
                        return <MenuItem value={data}>{data.CategoryName}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Paper>
    )
    function DragDrop(props:any) {
        const [drag, setDrag] = useState(false);
        let dragCount = 0;

        let dropRef:RefObject<any> = React.createRef();

        const handleDragEnter = (e:any) => {
            e.preventDefault();
            e.stopPropagation();
            dragCount++;
            if (e.dataTransfer.items && e.dataTranswer.items.length > 0) {
                setDrag(true);
            }
        }
        const handleDragLeave = (e:any) => {
            e.preventDefault();
            e.stopPropagation();
            dragCount--;
            if (dragCount > 0) return
            setDrag(false)
        }
        const handleDragOver = (e:any) => {
            e.preventDefault();
            e.stopPropagation();
        }
        const handleDrop = (e:any) => {
            e.preventDefault();
            e.stopPropagation();
        }

        useEffect(() => {
            dragCount = 0;
            let div:any = dropRef.current;
            if (div) {
                div.addEventListener('dragenter',handleDragEnter)
                div.addEventListener('dragleave',handleDragLeave)
                div.addEventListener('dragover',handleDragOver)
                div.addEventListener('drop',handleDrop)
            }
        }, []);
        useLayoutEffect(() => {
            let div:any = dropRef.current;
            if (div) {
                div.addEventListener('dragenter',handleDragEnter)
                div.addEventListener('dragleave',handleDragLeave)
                div.addEventListener('dragover',handleDragOver)
                div.addEventListener('drop',handleDrop)
            }
        },[]);

        return (
            <Dialog
                open={dialog}
                onClose={handleDialog}
            >
                <DialogTitle id="alert-dialog-title">
                   Drag Media to Import
                </DialogTitle>
                <DialogContent>
                    <div
                        ref={dropRef}
                        style={{display: 'inline-block', position: 'relative'}}
                    >
                        HERE
                        {drag &&
                            <div
                                style={{
                                    border: 'dashed grey 4px',
                                    backgroundColor: 'rgba(255,255,255,.8)',
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    zIndex: 9999
                                }}
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        right: 0,
                                        left: 0,
                                        textAlign: 'center',
                                        color: 'grey',
                                        fontSize: 36
                                    }}
                                >
                                    <div>drop here :)</div>
                                </div>
                            </div>
                        }
                        {props.children}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmitDialog} autoFocus>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
    //Template
    return (
        <div style={{marginLeft:'25vw', marginTop:'5vh'}}>
            <Box sx={{display: 'block', justifyContent: "left",width:'50vw',m: 2}}>
                <Paper elevation={6} sx={{boxShadow: '4', backgroundColor: 'rgba(255,255,255,.6)', py:2, px: 4}}>
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
                        <Paper sx={{ boxShadow: '4', backgroundColor: 'white' , ml:1, width:'50%'}} elevation={3}>
                            <TextField
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
                </Paper>
                <Box sx={{ mt:2, display: 'flex', flexWrap: 'wrap', justifyContent: "right"}}>
                    <Button
                        sx={{ mr: 2, width: "15ch", justifyContent: "center" }}
                        variant="contained"
                        color="warning">
                        Cancel
                    </Button>
                    <Button
                        sx={{ width: "15ch", justifyContent: "center" }}
                        onClick={sendToDB}
                        variant="contained"
                        color="success">
                        Create
                    </Button>
                </Box>
            </Box>
            {DragDrop(props)}
            {redirect ? <Redirect to={string}/> : null}
        </div>
    )
};

export default CreatePost;
