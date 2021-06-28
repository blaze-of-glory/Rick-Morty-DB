const SET_CHARACTERS = 'SET_CHARACTERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_CHARACTERS_COUNT = 'SET_TOTAL_CHARACTERS_COUNT';
const CHARACTERS_REQUESTED = 'CHARACTERS_REQUESTED';
const SET_ERROR = 'SET_ERROR';

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
    //pageSize: 10,
    //totalCharactersCount: 0,
    //currentPage: 1,

};

const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS: {
            return {...state, characters: action.characters,isLoading: false}
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
        case SET_TOTAL_CHARACTERS_COUNT: {
            return {...state, totalCharactersCount: action.totalCharactersCount}
        }

        default:
            return state;
    }
}

const setCharacters = (characters) => ({type: SET_CHARACTERS, characters});
const charactersRequested = () => ({type: CHARACTERS_REQUESTED});
const setError = (error) => ({type: SET_ERROR, error});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCharactersCount = (totalCharactersCount) => ({
    type: SET_TOTAL_CHARACTERS_COUNT,
    totalCharactersCount
});

export const fetchCharacters =(appService,dispatch) =>() => {
    dispatch(charactersRequested());
    appService.getCharacters()
        .then((data) => dispatch(setCharacters(data)))
        .catch((error) => dispatch(setError(error)))
}
//export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING}, isFetching);

/*export const getCharacters = (page, pageSize) => {
    return async (dispatch) =>{
        /!*dispatch(toggleIsFetching(true));*!/
        dispatch(setCurrentPage(page));

        let data = await characterAPI.getCharacter(page,pageSize);
        /!*dispatch(toggleIsFetching(false));*!/
        dispatch(setCharacters(data.items));
        dispatch(setTotalCharactersCount(data.totalCount));
    };
};*/

export default characterReducer;