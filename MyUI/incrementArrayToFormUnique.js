let obj = {};
function solution(str) {
    //Write Your Code Here
    let arrOfString = str.split(',');
    let newArr = [], nextVal;
    arrOfString.forEach(function (item) {
        if (obj[+item]) {
            nextVal = findNextMinal(+item)
            newArr.push(nextVal.toString())
        } else {
            obj[+item] = item;
            newArr.push(item.toString());
        }
    })
    let sum = newArr.reduce((a, b) => +a + +b)
    console.log(newArr.join(','));
    return sum;
}
console.log(solution("3,2,1,4,4,5,5,7,7"));

function findNextMinal(val) {
    if (obj[val]) {
        val = val + 1;
        return findNextMinal(val)
    } else {
        obj[val] = val.toString();
        return val;
    }
}