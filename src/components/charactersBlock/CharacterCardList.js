import {useStyles} from "../AppStyles";
import {Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import LayerIcon from "@material-ui/icons/Layers";
import {Link} from "react-router-dom";


const CharacterCardList = ({characters}) => {

    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {characters.map((el) => (
                    <Grid item key={el.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia className={classes.cardMedia} image={el.image}
                                       title="ImageTitle"/>
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h5" align="center" gutterBottom>{el.name}</Typography>
                            </CardContent>
                            <CardActions>
                               <Link to={`/characters/${el.id}`}><Button size="small" color="primary">Show details</Button></Link>
                                <LayerIcon/>
                                {/*<PlayCircleFilledIcon/>*/}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default CharacterCardList;