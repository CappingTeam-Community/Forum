import React, {useEffect, useState} from "react";
import {Box, Checkbox, Container, CssBaseline, Grid, Paper, Typography} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Axios from "axios";
import {getCurrentUser} from "../../shared/Authentication";
import {Redirect} from "react-router-dom";

function Interests () {
    const [categories, setCategories] = useState<any>([]);
    const [interests, setInterests] = useState<any>([]);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:3001/category/select/`)
            .then(res => {
                const data = res.data;
                setCategories(data);
            })
    }, []);

    function handleSelect (event:any) {
        event.preventDefault();
        const data = JSON.parse(event.target.value);
        if (event.target.checked) {
            if (event.currentTarget.labels) {
                let temp = [...interests, data];
                setInterests(temp);
            }
        } else {
            if (event.currentTarget.labels){
                const index = interests.indexOf(data);
                let temp = interests.splice(index,1);
                setInterests(temp);
            }
        }
    }
    async function handleSubmit (event:any) {
        event.preventDefault();
        const uid = getCurrentUser().UserID;
        try {
            await Promise.all([interests.forEach((category:any) => {
                Axios.post(`http://localhost:3001/user-category/insert/`, {
                    uid: uid,
                    cid: category.CategoryID
                });
            })]);
        } catch {
            throw Error("Promise.all Failed")
        }
        setRedirect(true);
    }
    // TODO: Redirect to category preferences
    return (
        <Container maxWidth='md'
                   sx={{marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center"}}>
            <CssBaseline/>
            <Typography component='h1' variant='h5' sx={{p: 5, fontSize: 30}}>
                Choose Interests
            </Typography>
            <Box component='form' onSubmit={handleSubmit} sx={{width: '100%'}}>
                <Grid container spacing={{md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                    {categories.map((category: any, index: number) => {
                        return (
                            <Grid item md={6} key={index}>
                                <Paper
                                    sx={{width: '100%', color: 'black', backgroundColor: `rgba(0, 186, 219, 0.5)`}}>
                                    <FormControlLabel control={<Checkbox color='success' value={JSON.stringify(category)} onChange={handleSelect}/>}
                                                      label={category.CategoryName} sx={{pl: 2}}/>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>
                <Button type='submit' variant='contained' sx={{mt: 3, mb: 2, width: '100%'}}>Complete Sign
                    Up</Button>
            </Box>
            {redirect ? (<Redirect to='/category/'/>) : null}
        </Container>
    )
}
export default Interests;