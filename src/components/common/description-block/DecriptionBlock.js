import {Container,Typography} from "@material-ui/core";
import {useStyles} from "../../AppStyles";


const DescriptionBlock = () => {
    const classes = useStyles();
    return(
        <div className={classes.mainContent}>
            <Container maxWidth="md">
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Rick&Morty
                    DB</Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Вы можете найти конкретного персонажа воспользовавшись фильтрацией!
                </Typography>
                <div className={classes.mainCards}>
                </div>
            </Container>
        </div>
    )
}

export default DescriptionBlock;