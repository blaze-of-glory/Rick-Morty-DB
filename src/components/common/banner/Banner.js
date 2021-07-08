import {Container, Grid, Paper, Typography} from "@material-ui/core";
import {useStyles} from "../../AppStyles";

const Banner = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.mainPosts}
               style={{backgroundImage: 'url(https://kinomonitor.info/tmp/images/5ce31a9593a4d278bc07e90a/scenes/5ce31a9593a4d278bc07e90a_2.jpg)'}}>
            <Container maxWidth="lg">
                <Grid container justify="center">
                    <Grid item md={7}>
                        <div className={classes.mainPostsContent}>
                                <Typography component="h1" variant="h3" color="inherit" align="center" gutterBottom>Welcome to
                                Rick&Morty DB</Typography>
                            <Typography variant="h5" color="inherit" align="center" paragraph>Моя база данных персонажей Rick and Morty</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}

export default Banner;