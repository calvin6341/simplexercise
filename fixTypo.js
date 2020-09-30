// Fix the code below here

function palindrome(str){
  str = str.toLowerCase();
  return str === str.split('').reverse().join('')
}
