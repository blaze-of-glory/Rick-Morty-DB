import {Component} from "react";
import CardDetails from "./CardDetails";
import compose from "../../utils/compose";
import {withAppService} from "../../components/hoc";
import {connect} from "react-redux";
import ErrorIndicator from "../../components/common/errorIndicator/ErrorIndicator";
import Preloader from "../../components/common/preloader/Preloader";
import {fetchCurrentCharacter,} from "../../redux/character-reducer";


class CardDetailsContainer extends Component {
    componentDidMount() {
        const currentID = this.props.match.params.id;
        this.props.fetchCurrentCharacter(currentID);
    }

    render() {
        const {currentCharacter, isLoading, error} = this.props;
        return (
            error ? <ErrorIndicator/> :
                isLoading ? <Preloader/> :
                    <CardDetails currentCharacter={currentCharacter}/>
        )
    }

}

const mapStateToProps = ({currentCharacterNumber, currentCharacter, isLoading, error}) => {
    return {currentCharacterNumber, currentCharacter, isLoading, error}
}

const mapDispatchToProps = (dispatch,{appService}) => {
    return {
        fetchCurrentCharacter: fetchCurrentCharacter(appService,dispatch)
    }

}

export default compose(
    withAppService(),
    connect(mapStateToProps,mapDispatchToProps)
)(CardDetailsContainer);