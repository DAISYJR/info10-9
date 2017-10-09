var arr = [3, 5, 7, 13, 5, 13, 5];
function duplicateTwo(arr) {
    var newarr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (newarr.indexOf(arr[i]) === -1) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
console.log(duplicateTwo(arr));