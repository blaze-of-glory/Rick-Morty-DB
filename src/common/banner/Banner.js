import {Container, Grid, Paper, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useStyles} from "../../components/AppStyles";

const Banner = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.mainPosts}
               style={{backgroundImage: 'url(https://avatars.mds.yandex.net/get-kinopoisk-post-img/1374145/245e9eaedc3ce28a4be97be3a36e05e9/1920x1080)'}}>
            <Container fixed>
                <Grid container>
                    <Grid item md={7}>
                        <div className={classes.mainPostsContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>Welcome to
                                Rick&Morty DB</Typography>
                            <Typography variant="h5" color="inherit" paragraph>Нужно придумать сюда какой-то
                                текст.</Typography>
                            <Button variant="contained" color="secondary"></Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}

export default Banner;