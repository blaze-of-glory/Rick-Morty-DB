import {AppBar, Box, Container, IconButton, InputBase, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import {useStyles} from "../components/AppStyles";
import SearchIcon from '@material-ui/icons/Search';


const Header = ({searchValue,fetchSearchValue}) => {
    const classes = useStyles();
    const handleSearch = (e) => {
        fetchSearchValue(e.target.value)
    }
    return(
        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>Rick&Morty DB</Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            value={searchValue}
                            onChange={(e) => handleSearch(e)}
                        />
                    </div>
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