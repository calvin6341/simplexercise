function median(arr) {
  // you can only write your code here!
  var midIndex = Math.floor((arr.length-1) /2);
  return arr.length % 2 === 1 ? arr[midIndex] : ((arr[midIndex] + arr[midIndex+1])/2);
}
