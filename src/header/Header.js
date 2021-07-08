import {AppBar, Container, IconButton, InputBase, Toolbar, Typography} from "@material-ui/core";
import {useStyles} from "../components/AppStyles";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';


const Header = ({searchValue,fetchSearchValue}) => {
    const classes = useStyles();
    const handleSearch = (e) => {
        fetchSearchValue(e.target.value)
    }
    return(
        <AppBar position="fixed">
            <Container maxWidth="lg">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                        <HomeIcon fontSize="large"/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>R&M DB</Typography>
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
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;