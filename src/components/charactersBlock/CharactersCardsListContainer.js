import {Component} from "react";
import {connect} from "react-redux";
import {withAppService} from "../hoc";
import {fetchCharacters, fetchCurrentPage, fetchIsColumn} from "../../redux/character-reducer";
import compose from "../../utils/compose";
import Preloader from "../common/preloader/Preloader";
import ErrorIndicator from "../common/errorIndicator/ErrorIndicator";
import CharacterCardList from "./CharacterCardList";


class CharactersCardsListContainer extends Component {

    componentDidMount() {
        const {
            currentPage,
            searchValue
        } = this.props;
        this.props.fetchCharacters(currentPage,searchValue);
    }

    render() {
        const {characters, isLoading, error,totalPagesCount,currentPage,fetchCurrentPage,isColumn,fetchIsColumn} = this.props;
        return (
            error ? <ErrorIndicator/> :
                isLoading ? <Preloader/> :
                    <CharacterCardList
                        characters={characters}
                        totalPagesCount={totalPagesCount}
                        currentPage={currentPage}
                        fetchCurrentPage={fetchCurrentPage}
                        isColumn={isColumn}
                        fetchIsColumn={fetchIsColumn}
                    />
        )

    }
}

const mapStateToProps = (
    {characters, isLoading, error,currentPage,totalPagesCount,fetchCurrentPage,isColumn,searchValue}) => {
    return {characters, isLoading, error,currentPage,totalPagesCount,fetchCurrentPage,isColumn,searchValue}
}
const mapDispatchToProps = (dispatch, {appService}) => {
    return {
        fetchCharacters: fetchCharacters(appService, dispatch),
        fetchCurrentPage: fetchCurrentPage(appService, dispatch),
        fetchIsColumn: fetchIsColumn(dispatch)
    }

}
export default compose(
    withAppService(),
    connect(mapStateToProps, mapDispatchToProps),
)(CharactersCardsListContainer);