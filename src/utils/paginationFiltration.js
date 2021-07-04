
const paginationFiltration = (arr, pageSize, pageNumber)  => {
    return arr.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

export default paginationFiltration;