import { Box, Grid, Container, Link } from '@mui/material';

function Footer() {
    return (
        <footer>
            <Box px={{ xs: 3, sm: 5 }}
                py={{ xs: 3, sm: 8}}
                bgcolor="text.secondary"
                color="white">
                <Container maxWidth='lg'>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} >Help</Box>
                                <Box>
                                    <Link href="" color="inherit">
                                        Contact
                                    </Link>
                                </Box>

                                <Box>
                                    <Link href="" color="inherit">
                                        Support
                                    </Link>
                                </Box>

                                <Box>
                                    <Link href="" color="inherit">
                                        Privacy
                                    </Link>
                                </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center"
                        pt={{ xs: 3, sm: 5 }}
                        pb={{ xs: 3, sm: 5 }}>
                        Team Community &rig; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>

        </footer>
    )
};

export default Footer;