// Make a reverse function with help from javascript array / string built-in function
function reverseArray(arr) {
    var result = [];
    for(var i = arr.length-1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
