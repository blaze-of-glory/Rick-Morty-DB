import {Component} from "react";
import Header from "./Header";
import compose from "../utils/compose";
import {withAppService} from "../components/hoc";
import {connect} from "react-redux";
import {fetchCharacters, fetchSearchValue} from "../redux/character-reducer";


class HeaderContainer extends Component {
    componentDidMount() {
    }
    render() {
        const {searchValue,currentPage, fetchSearchValue,fetchCharacters} = this.props;
        return <Header
            searchValue={searchValue}
            currentPage={currentPage}
            fetchSearchValue={fetchSearchValue}
            fetchCharacters={fetchCharacters}
        />
    }
}

const mapStateToProps = ({searchValue,currentPage}) => {
    return {searchValue,currentPage}
}

const mapDispatchToProps = (dispatch, {appService}) => {
    return {
        fetchSearchValue: fetchSearchValue(dispatch),
        fetchCharacters: fetchCharacters(appService,dispatch)
    }
}


export default compose(
    withAppService(),
    connect(mapStateToProps, mapDispatchToProps)
)(HeaderContainer);