import {Switch,Route} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import CardDetails from "./pages/card-details/CardDetails";


const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={MainPage} exact/>
            <Route path="/characters/:id" component={CardDetails}/>
        </Switch>
    )
}

export default Routes;