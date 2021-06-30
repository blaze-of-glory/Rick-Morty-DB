import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/"
})



export default class AppService {

    getCharacters(currentPage) {
        return instance.get(`character/?page=${currentPage}`)
            .then(response => {
                return response.data.results
            })
    }
    getCurrentCharacter(currentCharacterNumber) {
        return instance.get(`character/${currentCharacterNumber}`)
            .then(response => {
                return response.data
            })
    }
    getTotalPagesCount(){
        return instance.get(`character`)
            .then(response => {
                return response.data.info.pages
            })
    }
}