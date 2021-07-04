const searchFiltration = (arr,searchValue) => {
    return  arr.filter(function (character){
        return character.name.includes(searchValue)
    })
}
export default searchFiltration;