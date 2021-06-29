import {Card, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import "./CardDetails.css";

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: "56.25%"
        //paddingTop: "100%"
    },
    cardContent: {
        flexGrow: 1,
    },
    cardGrid: {
        marginTop: theme.spacing(15)
    }
}))

const CardDetails = ({currentCharacter}) => {
    const classes = useStyles();
    return (
        <div className="cardDetails__Wrapper">
            <div className="cardDetails__Container">
                <Container className={classes.cardGrid} maxWidth="lg">
                    <Grid container spacing={4} justify="center">
                            <Grid item key={currentCharacter.id} xs={12} sm={6} md={8}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia} image={currentCharacter.image}
                                               title="ImageTitle"/>
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" align="center" gutterBottom>{currentCharacter.name}</Typography>
                                        <Typography align="center">{currentCharacter.status}</Typography>
                                        <Typography align="center">{currentCharacter.species}</Typography>
                                        <Typography align="center">{currentCharacter.gender}</Typography>
                                        <Typography align="center">{currentCharacter.location.name}</Typography>
                                        <Typography align="center"><Link to="/">Вернуться к просмотру</Link></Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default CardDetails;