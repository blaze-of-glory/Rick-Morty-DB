import {Box, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import LayerIcon from "@material-ui/icons/Layers";
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

const example =
    {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
    }

const CardDetails = () => {
    const classes = useStyles();
    return (
        <div className="cardDetails__Wrapper">
            <div className="cardDetails__Container">
                <Container className={classes.cardGrid} maxWidth="lg">
                    <Grid container spacing={4} justify="center">
                            <Grid item key={example.id} xs={12} sm={6} md={8}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia} image={example.image}
                                               title="ImageTitle"/>
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" align="center" gutterBottom>{example.name}</Typography>
                                        <Typography align="center">{example.status}</Typography>
                                        <Typography align="center">{example.species}</Typography>
                                        <Typography align="center">{example.gender}</Typography>
                                        <Typography align="center">{example.location.name}</Typography>
                                        <Typography align="center"><Link to="/">Вернуться к просмотру</Link></Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                    </Grid>
                </Container>
               {/* <Card className={classes.card}>
                    <div className="cardDetails__imageContainer">
                    <CardMedia className={classes.cardMedia} image={example.image}
                               title="ImageTitle"/>
                    </div>
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h5" align="center" gutterBottom>{example.name}</Typography>
                        <Typography>{example.status}</Typography>
                    </CardContent>
                </Card>*/}
            </div>
        </div>
    )
}

export default CardDetails;