import {Container, Grid, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useStyles} from "../../AppStyles";


const DescriptionBlock = () => {
    const classes = useStyles();
    return(
        <div className={classes.mainContent}>
            <Container maxWidth="md">
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Rick&Morty
                    DB</Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>Нужно придумать сюда
                    какое-то описание желательно побольше</Typography>
                <div className={classes.mainCards}>
                    <Grid container spacing={5} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">Кнопка 1</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">Кнопка 2</Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default DescriptionBlock;