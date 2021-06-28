const currentCharacterFiltration = (arr,id) => {
    const filtered = arr.filter(function (character) {
        return character.id == id;
    })

    return filtered;
}

export default currentCharacterFiltration;