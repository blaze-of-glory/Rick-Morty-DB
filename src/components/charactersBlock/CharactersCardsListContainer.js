import {Component} from "react";
import {connect} from "react-redux";
import {withAppService} from "../hoc";
import {fetchCharacters} from "../../redux/character-reducer";
import compose from "../../utils/compose";
import Preloader from "../common/preloader/Preloader";
import ErrorIndicator from "../common/errorIndicator/ErrorIndicator";
import CharacterCardList from "./CharacterCardList";


class CharactersCardsListContainer extends Component {

    componentDidMount() {
        this.props.fetchCharacters();
    }

    render() {
        const {characters, isLoading, error} = this.props;
        return (
            error ? <ErrorIndicator/> :
                isLoading ? <Preloader/> :
                    <CharacterCardList characters={characters}/>
        )

    }
}

const mapStateToProps = ({characters, isLoading, error}) => {
    return {characters, isLoading, error}
}
const mapDispatchToProps = (dispatch, {appService}) => {
    return {
        fetchCharacters: fetchCharacters(appService, dispatch)
    }

}
export default compose(
    withAppService(),
    connect(mapStateToProps, mapDispatchToProps),
)(CharactersCardsListContainer);