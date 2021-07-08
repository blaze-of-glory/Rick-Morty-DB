import {Component} from "react";
import Header from "./Header";
import compose from "../utils/compose";
import {withAppService} from "../components/hoc";
import {connect} from "react-redux";
import { fetchSearchResult, fetchSearchValue} from "../redux/character-reducer";


class HeaderContainer extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.fetchSearchResult(this.props.searchValue,this.props.filtrationParam);
    }

    render() {
        const {searchValue, fetchSearchValue} = this.props;
        return <Header
            searchValue={searchValue}
            fetchSearchValue={fetchSearchValue}
        />
    }
}

const mapStateToProps = ({searchValue,filtrationParam}) => {
    return {searchValue,filtrationParam}
}

const mapDispatchToProps = (dispatch, {appService}) => {
    return {
        fetchSearchValue: fetchSearchValue(dispatch),
        fetchSearchResult: fetchSearchResult(appService,dispatch)
    }
}


export default compose(
    withAppService(),
    connect(mapStateToProps, mapDispatchToProps)
)(HeaderContainer);