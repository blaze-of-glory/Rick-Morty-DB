import {Card, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Preloader from "../../components/common/preloader/Preloader";

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: "56.25%"
    },
    cardContent: {
        flexGrow: 1,
    },
    cardGrid: {
        marginTop: theme.spacing(15)
    },
    cardDetailsWrapper: {
        marginBottom: theme.spacing(4)
    }
}))

const CardDetails = ({currentCharacter}) => {
  const character= currentCharacter[0]
    const classes = useStyles();
    return (
        <>
            {!character && <Preloader/>}
            {character &&
            <div className={classes.cardDetailsWrapper}>
                <div>
                    <Container className={classes.cardGrid} maxWidth="lg">
                        <Grid container spacing={4} justify="center">
                            <Grid item key={character.id} xs={12} sm={6} md={8}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia} image={character.image}
                                               title="ImageTitle"/>
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" align="center"
                                                    gutterBottom>{character.name}</Typography>
                                        <Typography align="center">{character.status}</Typography>
                                        <Typography align="center">{character.species}</Typography>
                                        <Typography align="center">{character.gender}</Typography>
                                        <Typography align="center">{character.location.name}</Typography>
                                        <Typography align="center"><Link to="/">Вернуться к
                                            просмотру</Link></Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div>
            }
        </>
    )
}

export default CardDetails;