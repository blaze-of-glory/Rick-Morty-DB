const SET_CHARACTERS = 'SET_CHARACTERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PAGES_COUNT = 'SET_TOTAL_PAGES_COUNT';
const SET_TOTAL_CHARACTERS_COUNT = 'SET_TOTAL_CHARACTERS_COUNT';
const CHARACTERS_REQUESTED = 'CHARACTERS_REQUESTED';
const SET_ERROR = 'SET_ERROR';
const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';
const SET_CURRENT_CHARACTER_NUMBER = 'SET_CURRENT_CHARACTER_NUMBER';
const SET_IS_COLUMN = 'SET_IS_COLUMN';

let initialState = {
    characters: [
        {
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
                "name": "Earth (C-137)",
                "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {
                "name": "Earth (Replacement Dimension)",
                "url": "https://rickandmortyapi.com/api/location/20"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "url": "https://rickandmortyapi.com/api/character/1",
            "created": "2017-11-04T18:48:46.250Z"
        },
        {
            "id": 2,
            "name": "Morty Smith",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
                "name": "Earth (C-137)",
                "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {
                "name": "Earth (Replacement Dimension)",
                "url": "https://rickandmortyapi.com/api/location/20"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            "url": "https://rickandmortyapi.com/api/character/2",
            "created": "2017-11-04T18:50:21.651Z"
        }
    ],
    isLoading: true,
    error: null,
    currentCharacterNumber: null,
    currentCharacter: null ,
    currentPage: 1,
    totalPagesCount: 5,
    isColumn: false

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
export const setTotalPageCount = (totalPagesCount) => ({type: SET_TOTAL_PAGES_COUNT, totalPagesCount});
export const setIsColumn = (isColumn) => ({type: SET_IS_COLUMN, isColumn})


export const fetchCharacters =(appService,dispatch) =>(currentPage) => {
    dispatch(charactersRequested());
    appService.getTotalPagesCount()
        .then((data) => dispatch(setTotalPageCount(data)))
        .catch((error) => dispatch(setError(error)))
    appService.getCharacters(currentPage)
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
    appService.getCharacters(currentPage)
        .then((data) => dispatch(setCharacters(data)))
        .catch((error) => dispatch(setError(error)))
}

export const fetchIsColumn = (dispatch) => (isColumn) => {
    dispatch(setIsColumn(isColumn))
}
export default characterReducer;