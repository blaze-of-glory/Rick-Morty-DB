import {Box, Container, Grid, Link, Paper, Typography} from "@material-ui/core";


const Footer = () => {
    return (
        <footer>
            <Box px={{xs:3, sm:10}} py={{xs:5,sm:10}} bgcolor="#3f51b5" color="white">
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Support
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Privacy
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Account</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Login
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Register
                                </Link>
                            </Box>
                           {/* <Box>
                                <Link href="/" color="inherit">
                                    Privacy
                                </Link>
                            </Box>*/}
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Info</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Info
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    About us
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Author
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Box textAlign="center" pt={{xs:5,md:10}} pb={{xs:5,sm:0}}>
                    Mikhail Petrunenko &reg; {new Date().getFullYear()}
                </Box>
            </Box>

            {/*<Paper elevation={3}>
                <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
            </Paper>*/}
        </footer>
    )
}

export default Footer;