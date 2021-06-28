import {AppBar, Box, Container, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import {useStyles} from "../components/AppStyles";


const Header = () => {
    const classes = useStyles();
    return(
        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>Rick&Morty DB</Typography>
                    <Box mr={3}>
                        <Button color="inherit" variant="outlined">Log In</Button>
                    </Box>
                    <Button color="secondary" variant="contained">Sign Up</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;