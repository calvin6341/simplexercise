function palindrome(word) {
  // you can only write your code here!
  return word === word.split("").reverse().join("");
}
