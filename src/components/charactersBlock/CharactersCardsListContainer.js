import {Component} from "react";
import {connect} from "react-redux";
import {withAppService} from "../hoc";
import {
    fetchCharacters,
    fetchCurrentPage,
    fetchIsColumn,
    fetchTotalCharactersCount, fetchTotalPagesCount
} from "../../redux/character-reducer";
import compose from "../../utils/compose";
import Preloader from "../common/preloader/Preloader";
import ErrorIndicator from "../common/errorIndicator/ErrorIndicator";
import CharacterCardList from "./CharacterCardList";
import paginationFiltration from "../../utils/paginationFiltration";


class CharactersCardsListContainer extends Component {

    componentDidMount() {
        this.props.fetchCharacters();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`did upd list`);
        this.props.fetchTotalCharactersCount(this.props.characters);
        const pagesCount = Math.ceil(this.props.totalCharactersCount/this.props.pageSize);
        this.props.fetchTotalPagesCount(pagesCount);
        if(this.props.searchValue.length === 0 && prevProps.searchValue !== this.props.searchValue) {
            this.props.fetchCharacters();
        }
    }

    render() {
        const {characters, isLoading, error,totalPagesCount,
            currentPage,fetchCurrentPage,isColumn,fetchIsColumn,pageSize} = this.props;
        return (
            error ? <ErrorIndicator/> :
                isLoading ? <Preloader/> :
                    <CharacterCardList
                        characters={paginationFiltration(characters,pageSize,currentPage)}
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
    {characters, isLoading, error,currentPage,totalPagesCount,
        fetchCurrentPage,isColumn,searchValue,pageSize,
        totalCharactersCount}) => {
    return {characters, isLoading, error,currentPage,totalPagesCount,
        fetchCurrentPage,isColumn,searchValue,pageSize,totalCharactersCount}
}
const mapDispatchToProps = (dispatch, {appService}) => {
    return {
        fetchCharacters: fetchCharacters(appService, dispatch),
        fetchCurrentPage: fetchCurrentPage(appService, dispatch),
        fetchIsColumn: fetchIsColumn(dispatch),
        fetchTotalCharactersCount: fetchTotalCharactersCount(dispatch),
        fetchTotalPagesCount: fetchTotalPagesCount(dispatch),
    }

}
export default compose(
    withAppService(),
    connect(mapStateToProps, mapDispatchToProps),
)(CharactersCardsListContainer);