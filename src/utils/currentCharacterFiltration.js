const currentCharacterFiltration = (arr,id) => {
    return arr.filter(function (character) {
        return character.id == id;
    })
}

export default currentCharacterFiltration;