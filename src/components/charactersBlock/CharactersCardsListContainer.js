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


class CharactersCardsListContainer extends Component {

    componentDidMount() {
        this.props.fetchCharacters(this.props.pageSize,this.props.currentPage,this.props.characters);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.searchValue.length > 0){
            this.props.fetchTotalCharactersCount(this.props.characters);
        }
        const pagesCount = Math.ceil(this.props.totalCharactersCount/this.props.pageSize);
        this.props.fetchTotalPagesCount(pagesCount);
        if(this.props.currentPage !== prevProps.currentPage) {
            this.props.fetchCharacters(this.props.pageSize,this.props.currentPage,this.props.characters);
        }
    }

    render() {
        const {characters, isLoading, error,totalPagesCount,
            currentPage,fetchCurrentPage,isColumn,fetchIsColumn,} = this.props;

        console.log(totalPagesCount);
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