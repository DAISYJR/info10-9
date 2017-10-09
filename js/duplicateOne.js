var arr = [3, 5, 7, 13, 5, 13, 5];
function duplicateOne(arr) {
    var newArr = [];
    arr.forEach(function (val) {
        if (newArr.indexOf(val) === -1) {
            newArr.push(val);
        }
    });
    return newArr;
}
console.log(duplicateOne(arr));