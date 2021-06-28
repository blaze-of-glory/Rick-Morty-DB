import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: "center",
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    },
}));
const Preloader = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <CircularProgress />
        </div>
    )
}

export default Preloader;