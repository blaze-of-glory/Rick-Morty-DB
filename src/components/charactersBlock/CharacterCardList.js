import {useStyles} from "../AppStyles";
import {
    ButtonBase, ButtonGroup,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Paper,
    Typography
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import LayerIcon from "@material-ui/icons/Layers";
import {Link} from "react-router-dom";
import {Pagination} from "@material-ui/lab";
import FiltrationOptionsField from "../common/FiltrationOptionsField";



const CharacterCardList = ({characters, totalPagesCount, currentPage, fetchCurrentPage, isColumn,
     fetchIsColumn,isSortedByName,fetchIsSortedByName,isFiltationOpen,fetchIsFiltrationOpen,
     filtrationParam,fetchFiltrationParam}) => {
    const showCurrentPage = (pageNumber) => {
        fetchCurrentPage(pageNumber);
    }
    const toggleHandler = (isColumn) => {
        fetchIsColumn(isColumn)
    }
    const sortHandler = (isSortedByName) => {
        fetchIsSortedByName(isSortedByName)
    }
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="lg">
            <Typography align="center" className={classes.switchDisplayBtns}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    {isColumn?<Button onClick={() => toggleHandler(false)}>Плитка</Button>
                    :
                    <Button onClick={() => toggleHandler(true)}>Таблица</Button>}
                    {isSortedByName?<Button onClick={() => sortHandler(false)}>Отсортировать по id</Button>
                        :
                        <Button onClick={() => sortHandler(true)}>Отсортировать по имени</Button>}
                </ButtonGroup>
            </Typography>
            <Typography align="center" className={classes.switchDisplayBtns}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">

                </ButtonGroup>
            </Typography>
            
            <FiltrationOptionsField isFiltationOpen={isFiltationOpen}
                                    fetchIsFiltrationOpen={fetchIsFiltrationOpen}
                                    filtrationParam={filtrationParam}
                                    fetchFiltrationParam={fetchFiltrationParam}/>

            {isColumn ? <div className={classes.root}>
                <Paper className={classes.paper}>
                    {characters.map((el) => (
                        <Grid container spacing={2} key={el.id}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex"
                                         src={el.image}/>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2} key={el.id}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h5" align="center">
                                            Сведения
                                        </Typography>
                                        <Typography variant="body1" align="center" gutterBottom>
                                            {el.name}
                                        </Typography>
                                        <Typography variant="body1" align="center" gutterBottom>
                                            {el.gender}
                                        </Typography>
                                        <Typography variant="body1" align="center" gutterBottom>
                                            {el.status}
                                        </Typography>
                                        <Typography variant="body1" align="center" gutterBottom>
                                            {el.location.name}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Paper>
            </div> : <Grid container spacing={4}>
                {characters.map((el) => (
                    <Grid item key={el.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia className={classes.cardMedia} image={el.image}
                                       title={el.name}/>
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h5" align="center" gutterBottom>{el.name}</Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={`/characters/${el.id}`}><Button size="small" color="primary">Show
                                    details</Button></Link>
                                <LayerIcon/>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>}

            <Grid
                container
                direction="row"
                justify="center"
                className={classes.pagination}
            >
                <Pagination count={totalPagesCount} page={currentPage}
                            onChange={(event, value) => {
                                showCurrentPage(value)
                            }}
                            size="large"/>
            </Grid>

        </Container>
    );
}

export default CharacterCardList;