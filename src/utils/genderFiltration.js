const genderFiltration = (arr,filtrationParam) => {
    if(filtrationParam === 'all'){
        return arr;
    } else {
    return  arr.filter(function (character){
        return character.gender.includes(filtrationParam)
    })
}
}
export default genderFiltration;