import {Switch,Route} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import CardDetails from "./pages/card-details/CardDetails";
import CardDetailsContainer from "./pages/card-details/CardDetailsContainer";


const Routes = () => {
    return(
        <Switch>
            <Route path="/" component={MainPage} exact/>
            <Route path="/characters/:id" component={CardDetailsContainer}/>
        </Switch>
    )
}

export default Routes;