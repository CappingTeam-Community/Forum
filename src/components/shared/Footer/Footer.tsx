import styles from './Footer.module.css';
import react from 'react';
import { Box, Grid, Container, Link } from '@mui/material';





function Footer() {
    //Logic

    //Template
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

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Account</Box>
                                <Box>
                                <Link href='/login' color="inherit">
                                        Login
                                    </Link>
                                </Box>

                                <Box>
                                <Link href='/signup' color="inherit">
                                        Register
                                    </Link>
                            </Box>

                            <Box>
                                <Link href='/setting' color="inherit">
                                    Settings
                                </Link>
                            </Box>

                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>More</Box>
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