import CircularProgress from '@material-ui/core/CircularProgress';
import {useStyles} from "../../AppStyles";
const Preloader = () => {
    const classes = useStyles();
    return(
        <div className={classes.preloader}>
            <CircularProgress />
        </div>
    )
}

export default Preloader;