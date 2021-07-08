const SET_CHARACTERS = 'SET_CHARACTERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PAGES_COUNT = 'SET_TOTAL_PAGES_COUNT';
const SET_TOTAL_CHARACTERS_COUNT = 'SET_TOTAL_CHARACTERS_COUNT';
const CHARACTERS_REQUESTED = 'CHARACTERS_REQUESTED';
const SET_ERROR = 'SET_ERROR';
const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';
const SET_CURRENT_CHARACTER_NUMBER = 'SET_CURRENT_CHARACTER_NUMBER';
const SET_IS_COLUMN = 'SET_IS_COLUMN';
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
const SET_IS_SORTED_BY_NAME = 'SET_IS_SORTED_BY_NAME';
const SET_IS_FILTRATION_OPEN = 'SET_IS_FILTRATION_OPEN';
const SET_FILTRATION_PARAM = 'SET_FILTRATION_PARAM';

let initialState = {
    characters: [],
    isLoading: true,
    error: null,
    currentCharacterNumber: null,
    currentCharacter: [],
    currentPage: 1,
    pageSize: 6,
    totalPagesCount: 5,
    isColumn: false,
    searchValue: '',
    totalCharactersCount: 10,
    isSortedByName: false,
    filtrationParam: 'all',
    isFiltationOpen: false,

};
const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS: {
            return {...state, characters: action.characters,isLoading: false}
        }
        case SET_CURRENT_CHARACTER_NUMBER: {
            return {...state, currentCharacterNumber: action.currentCharacterNumber}
        }
        case SET_CURRENT_CHARACTER : {
            return {...state, currentCharacter: action.currentCharacter, isLoading: false}
        }
        case CHARACTERS_REQUESTED: {
            return {...state, isLoading: true}
        }
        case SET_ERROR :{
            return {...state, error: action.error}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_PAGES_COUNT: {
            return { ...state,totalPagesCount: action.totalPagesCount}
        }
        case SET_TOTAL_CHARACTERS_COUNT: {
            return {...state, totalCharactersCount: action.totalCharactersCount}
        }
        case SET_IS_COLUMN: {
            return {...state, isColumn: action.isColumn}
        }
        case SET_SEARCH_VALUE: {
            return {...state, searchValue: action.searchValue}
        }
        case SET_IS_SORTED_BY_NAME: {
            return {...state, isSortedByName: action.isSortedByName}
        }
        case SET_IS_FILTRATION_OPEN: {
            return {...state, isFiltationOpen: action.isFiltationOpen}
        }
        case SET_FILTRATION_PARAM: {
            return {...state, filtrationParam: action.filtrationParam}
        }
        default:
            return state;
    }
}

export const setCharacters = (characters) => ({type: SET_CHARACTERS, characters});
export const setCurrentCharacterNumber = (currentCharacterNumber) => ({type: SET_CURRENT_CHARACTER_NUMBER, currentCharacterNumber})
export const setCurrentCharacter = (currentCharacter) => ({type: SET_CURRENT_CHARACTER, currentCharacter})
export const charactersRequested = () => ({type: CHARACTERS_REQUESTED});
export const setError = (error) => ({type: SET_ERROR, error});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCharactersCount = (totalCharactersCount) => ({type:SET_TOTAL_CHARACTERS_COUNT, totalCharactersCount});
export const setTotalPagesCount = (totalPagesCount) => ({type: SET_TOTAL_PAGES_COUNT, totalPagesCount});
export const setIsColumn = (isColumn) => ({type: SET_IS_COLUMN, isColumn});
export const setSearchValue = (searchValue) => ({type: SET_SEARCH_VALUE, searchValue});
export const setIsSortedByName = (isSortedByName) => ({type: SET_IS_SORTED_BY_NAME, isSortedByName});
export const setIsFiltrationOpen = (isFiltationOpen) => ({type: SET_IS_FILTRATION_OPEN, isFiltationOpen});
export const setFiltrationParam = (filtrationParam) => ({type: SET_FILTRATION_PARAM, filtrationParam});


export const fetchCharacters =(appService,dispatch) =>() => {
    dispatch(charactersRequested());
    appService.getCharacters()
        .then((data) => dispatch(setCharacters(data)))
        .catch((error) => dispatch(setError(error)))
}

export const fetchCurrentCharacter = (appService,dispatch) => (number,currentCharacterNumber) => {
    dispatch(charactersRequested());
    dispatch(setCurrentCharacterNumber(number));
    appService.getCurrentCharacter(number)
        .then((data) => dispatch(setCurrentCharacter(data)))
        .catch((error) => dispatch(setError(error)))
}

export const fetchCurrentPage = (appService, dispatch) => (currentPage) => {
    dispatch(setCurrentPage(currentPage))
}

export const fetchIsColumn = (dispatch) => (isColumn) => {
    dispatch(setIsColumn(isColumn))
}

export  const fetchSearchValue = (dispatch) => (searchValue) => {
    dispatch(setSearchValue(searchValue))
}

export const fetchSearchResult = (appService, dispatch) => (searchValue,filtrationParam) => {
    dispatch(charactersRequested());
    appService.getSearchedCharacters(searchValue,filtrationParam)
        .then((data) => dispatch(setCharacters(data)))
        .catch((error) => dispatch(setError(error)))
}

export const fetchTotalCharactersCount = (dispatch) => (characters) => {
    dispatch(setTotalCharactersCount(characters.length));
}

export const fetchTotalPagesCount = (dispatch) => (totalPagesCount)  => {
    dispatch(setTotalPagesCount(totalPagesCount));
}
export const fetchIsSortedByName = (dispatch) => (isSortedByName) => {
    dispatch(setIsSortedByName(isSortedByName));
}
export const fetchIsFiltrationOpen = (dispatch) => (isFiltationOpen) => {
    dispatch(setIsFiltrationOpen(isFiltationOpen));
}
export const fetchFiltrationParam = (appService,dispatch) => (filtrationParam) => {
    dispatch(setFiltrationParam(filtrationParam));
    dispatch(charactersRequested());
    appService.getFilteredCharacters(filtrationParam)
        .then((data) => dispatch(setCharacters(data)))
        .catch((error) => dispatch(setError(error)))
}

export default characterReducer;