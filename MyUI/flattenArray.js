let myArr = [];
function flattenArray(arr) {
    arr.forEach((arrElem) => {
        if (arrElem instanceof Array) {
            flattenArray(arrElem)
        } else {
            myArr.push(arrElem)
        }
    })
    return myArr;
}

console.log(flattenArray([1, 2, [3, 4], 5, [6, [7, 8], 9, 10]]))